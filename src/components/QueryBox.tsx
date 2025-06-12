import React, { useState } from "react";
import axios from "axios";

const QueryBox: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/query", { query });
      setResponse(res.data.answer);
    } catch (err) {
      setResponse("❌ Error getting response.");
    }
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about retail data..."
          style={{ width: "100%", padding: "8px" }}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>AI Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default QueryBox;
