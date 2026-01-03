📝 Survey Application (Full Stack)

This is a basic Survey / Feedback Application built as part of a Full Stack Developer Intern task.

The project allows users to:

Register and log in

Create surveys

Submit responses

View survey results (frontend-ready)

The focus of this project is clean fundamentals, not advanced features.

🛠 Tech Stack
Frontend

React (Vite)

Axios

Chart.js (for result visualization)

Backend

Python

FastAPI

SQLAlchemy

JWT Authentication

Database

PostgreSQL (production)

SQLite / PostgreSQL (local development)

📂 Project Structure
survey-application/
│
├── frontend/          # React frontend
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/           # FastAPI backend
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── auth.py
│   └── requirements.txt
│
└── README.md

🚀 How to Run the Project Locally
1️⃣ Clone the repository
git clone https://github.com/Harshajeon/survey-application.git
cd survey-application

🔹 Backend Setup (FastAPI)
2️⃣ Create virtual environment
cd backend
python -m venv venv

3️⃣ Activate virtual environment

Windows (PowerShell):

.\venv\Scripts\Activate.ps1

4️⃣ Install dependencies
pip install -r requirements.txt

5️⃣ Set environment variable

Create a file called .env inside backend/:

DATABASE_URL=sqlite:///./test.db

6️⃣ Run the backend server
uvicorn main:app --reload


Backend will run at:

http://127.0.0.1:8000


API Docs (Swagger):

http://127.0.0.1:8000/docs

🔹 Frontend Setup (React)
7️⃣ Install frontend dependencies
cd ../frontend
npm install

8️⃣ Run frontend
npm run dev


Frontend will run at:

http://localhost:5173

🔐 Authentication

Users can register and login

JWT tokens are generated on login

Only authenticated users can create surveys

📊 Survey Features

Create surveys

Submit responses

Survey results can be visualized using charts

Designed to be simple and extendable

🌐 Deployment

Frontend: Can be deployed using GitHub Pages or Netlify

Backend: Designed to work on Render / similar platforms

Environment variables are required for production

⚠️ Notes

.env and venv are intentionally excluded from GitHub

🙌 Author

Harsha Varthini
GitHub: https://github.com/Harshajeon
