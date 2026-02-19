🏥 Health Vault Backend API

A secure and scalable backend system for a Health Web Application built using Node.js, Express.js, and MongoDB.

This project enables users to securely upload medical reports (PDF/Image), extract text using OCR, and generate structured health insights using LLM integration.

🚀 Tech Stack

Node.js – Backend runtime

Express.js – REST API framework

MongoDB + Mongoose – Database & ODM

jsonwebtoken (JWT) – Authentication & Authorization

bcrypt – Password hashing

Joi – Request validation

Multer – File upload handling

Tesseract.js – OCR text extraction

pdf-poppler – PDF to image conversion

LLM Integration – AI-powered medical report structuring

✨ Features

🔐 Secure User Authentication (JWT-based)

🔑 Password Encryption using bcrypt

📂 Upload Medical Reports (PDF & Images)

🔎 OCR-based Text Extraction

🤖 AI-generated Structured Medical Data

🧾 Organized & Clean MVC Architecture

⚡ Middleware-based Validation & Error Handling

🛡️ Secure API with Protected Routes

📁 Project Structure
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── reportController.js
├── middleware/
│   ├── authMiddleware.js
│   └── validationMiddleware.js
├── models/
│   ├── User.js
│   └── Report.js
├── routes/
│   ├── authRoutes.js
│   └── reportRoutes.js
├── utils/
├── uploads/
├── server.js
└── package.json

🔐 Authentication Flow

User registers with email & password

Password is hashed using bcrypt

On login, JWT token is generated

Protected routes require valid JWT token

📤 Report Processing Flow

User uploads PDF/Image

PDF converted to image (if required) using pdf-poppler

OCR extracts raw text via Tesseract.js

Extracted text sent to LLM

Structured medical data generated and stored

🛠 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/yourusername/health-vault-backend.git
cd health-vault-backend

2️⃣ Install Dependencies
npm install

3️⃣ Create .env File
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
LLM_API_KEY=your_llm_key

4️⃣ Run Server
npm start


or (for development)

npm run dev

📡 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
Report Routes
Method	Endpoint	Description
POST	/api/reports/upload	Upload medical report
GET	/api/reports/:id	Get processed report
🎯 Purpose of Project

This project was built as a portfolio backend application to demonstrate:

Secure authentication systems

File upload & handling

OCR integration

LLM-based data structuring

Clean backend architecture

Real-world healthcare use case

🔮 Future Improvements

Role-based access control

Cloud file storage (AWS S3)

Email verification

API rate limiting

Docker deployment

CI/CD integration

👨‍💻 Author

Hamza Shahid Siddiqui
Backend Developer | Learning AI Integration | HealthTech Enthusiast