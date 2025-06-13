import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios, { AxiosError } from "axios";
import "./QueryBox.css";

interface QueryResponse {
  query: string;
  response: string;
  use_rag: boolean;
}

const QueryBox: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setQuery(value);
    if (error && value.trim()) setError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery || trimmedQuery.length < 3) {
      setError("Please enter at least 3 characters");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await axios.post<QueryResponse>(`${apiUrl}/query`, {
        query: trimmedQuery,
        use_rag: true,
      });

      if (res.data?.response) {
        setResponse(res.data.response);
      } else {
        throw new Error("Invalid response format from server");
      }
    } catch (err) {
      const errorMessage = err instanceof AxiosError
        ? err.response?.data?.message || "Network error occurred"
        : "Unknown error occurred";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="query-box" role="main" aria-labelledby="query-heading">
      <h2 id="query-heading">Ask a Question</h2>
      <form onSubmit={handleSubmit} aria-labelledby="query-heading" noValidate>
        <div className="input-group">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Ask about retail data..."
            aria-label="Query input"
            aria-required="true"
            aria-invalid={!!error}
            disabled={isLoading}
            minLength={3}
            required
          />
          <button
            type="submit"
            disabled={isLoading || query.length < 3}
            aria-busy={isLoading}
          >
            {isLoading ? "Processing..." : "Submit"}
          </button>
        </div>
      </form>
      <div role="alert" aria-live="polite">
        {error && <p className="error-text">{error}</p>}
        {isLoading && <p className="loading-text">Processing your question...</p>}
        {response && (
          <div className="response-container">
            <h3 className="response-heading">AI Response:</h3>
            <div className="response-content">
              {response}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QueryBox;
