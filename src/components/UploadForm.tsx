import React, { useState } from "react";
import axios from "axios";

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:8000/upload-document", formData);
      setStatus("✅ Upload successful!");
    } catch (err) {
      setStatus("❌ Upload failed.");
    }
  };

  return (
    <div>
      <h2>Upload Document</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button type="submit">Upload</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default UploadForm;
