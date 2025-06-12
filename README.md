# Retail Sales Data Analysis Frontend

A React-based frontend application for analyzing retail sales data using AI-powered insights. This application provides an intuitive interface for uploading documents and querying retail sales information.

## Features

- Upload and manage retail sales documents
- Interactive query interface with AI-powered responses
- Real-time response generation
- Document context display

## Prerequisites

- Node.js 16+
- npm or yarn
- Backend API service (running on port 8000)

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
Create a `.env` file:
```
VITE_API_URL=http://localhost:8000
```

3. Start development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to access the application.

## Application Structure

- `/src/components` - React components
- `/src/api` - API integration services
- `/src/types` - TypeScript type definitions
- `/src/utils` - Utility functions

## API Integration

The application connects to the following API endpoints:

```
POST /api/documents/upload
- Upload retail sales documents
- Accepts multipart/form-data

POST /api/query
- Submit questions about retail data
- Request: { "query": "string" }
- Response: { "answer": "string", "context": "string" }

GET /api/documents
- List all uploaded documents
- Response: { "documents": Document[] }
```

## Development

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
