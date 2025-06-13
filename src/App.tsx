import React from "react";
import UploadForm from "./components/UploadForm";
import QueryBox from "./components/QueryBox";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Retail Sales RAG System</h1>
      <div className="section">
        <UploadForm />
      </div>
      <hr />
      <div className="section">
        <QueryBox />
      </div>
    </div>
  );
};

export default App;
