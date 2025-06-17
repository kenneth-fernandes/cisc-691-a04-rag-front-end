import UploadForm from "./components/UploadForm";
import QueryBox from "./components/QueryBox";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="system-title">Retail Sales RAG System</h1>
      <main>
        <div className="section">
          <UploadForm />
        </div>
        <hr />
        <div className="section">
          <QueryBox />
        </div>
      </main>
    </div>
  );
};

export default App;
