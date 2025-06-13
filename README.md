# Retail Sales Data Analysis Frontend

A React-based frontend application for analyzing retail sales data using AI-powered insights.

## Prerequisites

- Node.js 18+
- npm or yarn
- Docker (optional, for containerized deployment)
- Backend API service (running on port 8001)

## Installation & Running

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
Create a `.env` file:
```
VITE_API_URL=http://localhost:8001
```

3. Start development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to access the application.

### Docker Deployment

1. The project includes a `.env.docker` file with the following configuration:
```bash
VITE_API_URL=http://localhost:8001
```

2. Build and run using Docker Compose:
```bash
# Build and start the container
docker-compose up --build

# Run in detached mode (optional)
docker-compose up --build -d
```

The application will be available at `http://localhost:5173`

To stop the container:
```bash
docker-compose down
```

### Manual Docker Build

1. Build the Docker image:
```bash
docker build -t rag-frontend .
```

2. Run the container:
```bash
# Run with host network
docker run -p 5173:80 --env-file .env.docker rag-frontend

# Or with custom environment variable
docker run -p 5173:80 -e VITE_API_URL=http://localhost:8001 rag-frontend
```

## API Integration

The application currently implements the following API endpoints:

```
POST /api/documents/upload
- Upload retail sales documents
- Accepts multipart/form-data

POST /api/query
- Submit questions about retail data
- Request: { "query": "string" }
- Response: { "answer": "string", "context": "string" }
```

Note: Additional endpoints (POST /retrieve) will be implemented in future stages.

## Development

Built with:
- React + TypeScript
- Vite
- Axios for API integration
- Docker for containerization
