import React from "react";
import UploadForm from "./components/UploadForm";
import QueryBox from "./components/QueryBox";

const App: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Retail Sales RAG System</h1>
      <UploadForm />
      <hr />
      <QueryBox />
    </div>
  );
};

export default App;
