import { connectDB } from "../../lib/mongodb";
import Login from "../../models/Login";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  await connectDB();
  if (req.method === "POST") {
    const requreFeild = ["name", "email", "password"];

    const missingFields = requreFeild.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }
    const { name, email, password } = req.body;
    try {
      const existingUser = await Login.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await Login.create({
        name,
        email,
        password: hashedPassword
      });
      return res.status(201).json({ message: "User created successfully", user: newUser, success: true });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Error creating user", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
};

export default handler;
