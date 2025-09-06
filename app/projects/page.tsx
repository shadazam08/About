"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import "./UploadProject.css"; // We'll create this CSS file

const UploadProject: React.FC = () => {
  const { logout, isLogin } = useAuth();
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [projectLink, setProjectLink] = useState<string>("");
  const [projectImage, setProjectImage] = useState<File | null>(null);
  const [liveDemoLink, setLiveDemoLink] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter()

  useEffect(() => {
    if (!isLogin) {
      router.push('/')
    }
  }, [isLogin, router])

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProjectImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!projectImage) {
      setMessage("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("projectDescription", projectDescription);
    formData.append("projectLink", projectLink);
    formData.append("liveDemoLink", liveDemoLink);
    formData.append("projectImage", projectImage);

    try {
      const res = await fetch("/api/projectUpload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Project uploaded successfully!");
        setProjectName("");
        setProjectDescription("");
        setProjectLink("");
        setLiveDemoLink("");
        setProjectImage(null);
      } else {
        setMessage(data.message || "Failed to upload project.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while uploading the project.");
    }
  };

  return (
    <div className="upload-container">
      <button className="logout-button" onClick={logout}>Logout</button>
      <h2 className="title">Upload New Project</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
            placeholder="Enter project name"
          />
        </div>

        <div className="form-group">
          <label>Project Description</label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
            placeholder="Describe your project..."
          />
        </div>

        <div className="form-group">
          <label>Project Link</label>
          <input
            type="url"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
            required
            placeholder="https://github.com/yourproject"
          />
        </div>

        <div className="form-group">
          <label>Live Demo</label>
          <input
            type="url"
            value={liveDemoLink}
            onChange={(e) => setLiveDemoLink(e.target.value)}
            required
            placeholder="https://live-demo.com"
          />
        </div>

        <div className="form-group">
          <label>Project Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Upload Project</button>
      </form>

      {message && <p className="tooltip">{message}</p>}
    </div>
  );
}

export default UploadProject;