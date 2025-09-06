"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function UploadProject() {
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [projectLink, setProjectLink] = useState<string>("");
  const [projectImage, setProjectImage] = useState<File | null>(null);
  const [liveDemoLink, setLiveDemoLink] = useState<string>("");
  const [message, setMessage] = useState<string>("");

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
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
      <h2>Upload New Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name:</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Project Description:</label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Project Link:</label>
          <input
            type="url"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Live Demo:</label>
          <input
            type="url"
            value={liveDemoLink}
            onChange={(e) => setLiveDemoLink(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Project Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit">Upload Project</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
