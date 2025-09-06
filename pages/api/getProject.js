import { connectDB } from "../../lib/mongodb";
import Project from "../../models/Project";

const handler = async (req, res) => {
  await connectDB();
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    try {
        // Fetch all projects from the database
        const projects = await Project.find({});
        res.status(200).json(projects);
    }
    catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export default handler;