# EMO Energy Fleet Management App - Evaluation Project

This project is a simplified version of EMO Energy's fleet management application. 

## Setup Instructions

1.  **Backend:**
    *   Navigate to the `backend` directory:
        `cd backend`
    *   Create a virtual environment (recommended):
        `python3 -m venv venv`
    *   Activate the virtual environment:
        *   On macOS/Linux:
            `source venv/bin/activate`
        *   On Windows:
            `venv\Scripts\activate`
    *   Install dependencies:
        `pip install -r requirements.txt`
    *   Run the backend:
        `uvicorn main:app --reload`

2.  **Frontend:**
    *   Navigate to the `frontend` directory:
        `cd frontend`
    *   Install dependencies:
        `npm install`
    *   Run the frontend:
        `npm start`

## Access

*   Frontend: Usually runs on `http://localhost:3000`
*   Backend: Usually runs on `http://localhost:8000` (API endpoints are available here)
