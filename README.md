# Neuroflow — AI-Powered Workflow Intelligence

A full-stack landing page and API for Neuroflow, a fictional AI startup.

## Project Structure

```
neuroflow/
├── src/
│   ├── index.html      # Landing page (Hero, Features, Pricing, Contact)
│   ├── style.css        # Modern dark theme stylesheet
│   └── server.js        # Express.js API server
├── tests/
│   ├── test-plan.md     # QA test plan
│   └── report.md        # QA test report
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js)

### Installation

```bash
# Clone or navigate to the project directory
cd neuroflow

# Install dependencies
npm install
```

### Running the Server

```bash
node src/server.js
```

The server will start at **http://localhost:3000**.

- The landing page is served at the root URL: [http://localhost:3000](http://localhost:3000)
- The API endpoints are available under `/api/`

### API Endpoints

| Method | Endpoint         | Description                              |
|--------|-----------------|------------------------------------------|
| GET    | `/api/features` | Returns an array of 3 AI feature objects |
| GET    | `/api/pricing`  | Returns an array of 3 pricing tiers      |
| POST   | `/api/contact`  | Accepts `{ name, email, message }` JSON  |

### Example: POST /api/contact

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Ada","email":"ada@example.com","message":"Hello!"}'
```

Response:
```json
{
  "success": true,
  "message": "Thank you for reaching out! We will get back to you within 24 hours."
}
```

## Tech Stack

- **Frontend:** HTML5, CSS3, vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Design:** Dark theme with glassmorphism, Inter font, CSS animations
