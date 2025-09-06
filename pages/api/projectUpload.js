import fs from "fs";
import path from "path";
import formidable from "formidable";
import { connectDB } from "../../lib/mongodb";
import Project from "../../models/Project";

// Disable default body parser for file upload
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await connectDB();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Ensure upload folder exists
  const uploadDir = path.join(process.cwd(), "public", "upload");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Configure formidable
  const form = formidable({
    uploadDir,
    keepExtensions: true,
    multiples: false, // single file upload
  });

  // Wrap form.parse in a Promise to use async/await
  const parseForm = () =>
    new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

  try {
    const { fields, files } = await parseForm();

    // Ensure file exists
    let file = files.projectImage;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    file = Array.isArray(file) ? file[0] : file;

    const fileName = path.basename(file.filepath);
    const filePath = `/upload/${fileName}`; // Public URL

    // Handle fields that might come as arrays
    const projectName = Array.isArray(fields.projectName) ? fields.projectName[0] : fields.projectName;
    const projectDescription = Array.isArray(fields.projectDescription) ? fields.projectDescription[0] : fields.projectDescription;
    const projectLink = Array.isArray(fields.projectLink) ? fields.projectLink[0] : fields.projectLink;
    const liveDemoLink = Array.isArray(fields.liveDemoLink) ? fields.liveDemoLink[0] : fields.liveDemoLink;

    // Save project to MongoDB
    const newProject = await Project.create({
      projectName,
      projectDescription,
      projectLink,
      liveDemoLink,
      projectImage: filePath,
    });

    res.status(201).json({ message: "Project created", project: newProject });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Failed to upload project", error: error.message });
  }
}
