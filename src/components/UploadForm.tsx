import React, { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import axios, { AxiosError } from "axios";
import './UploadForm.css'; // Import the CSS file

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (status) setStatus("");
  };

  const handleUpload = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!file) {
      setStatus("❌ Please select a file first.");
      return;
    }

    setIsUploading(true);
    setStatus("📤 Uploading document...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.post(`${apiUrl}/upload-document`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setStatus(`✅ Successfully uploaded ${file.name}!`);
    } catch (error) {
      const errorMessage = error instanceof AxiosError
        ? error.response?.data?.message || error.message
        : 'Unknown error occurred';
      setStatus(`❌ Upload failed: ${errorMessage}`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="upload-form" role="main" aria-label="Document Upload">
      <h2 id="upload-heading">Upload Document</h2>
      <form onSubmit={handleUpload} aria-labelledby="upload-heading">
        <div className="input-group">
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            onChange={handleFileChange}
            disabled={isUploading}
            aria-label="Choose file"
            aria-required="true"
          />
          <button 
            type="submit" 
            disabled={isUploading || !file}
            aria-busy={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </button>
        </div>
        <p className={status.includes("❌") ? "error-text" : "success-text"} role="status">
          {status}
        </p>
      </form>
    </div>
  );
};

export default UploadForm;
