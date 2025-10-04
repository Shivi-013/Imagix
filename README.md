# Imagix
AI Text-to-Image SaaS project(MERN)

## 🚀 Features

✅ **AI Text-to-Image Generation** – Powered by the [ClipDrop API](https://clipdrop.co/apis), transforming your imagination into visuals.  
✅ **User Authentication** – Secure registration and login using **JWT + MongoDB**.  
✅ **Credit System** – Each image generation consumes 1 credit; users can buy more via integrated payments.  
✅ **Payment Gateway Integration** – Seamless online payments for credit purchase.  
✅ **Responsive UI** – Built with React + TailwindCSS for a clean and modern user experience.  
✅ **Toast Notifications** – Real-time feedback for user actions.  
✅ **Cloud-based Storage** – MongoDB for user data and image history.  

---

## 🧠 Tech Stack

**Frontend:** React.js, TailwindCSS, Axios, Framer Motion  
**Backend:** Node.js, Express.js, JWT, Mongoose  
**Database:** MongoDB (Atlas)  
**AI API:** ClipDrop API  
**Payments:** Razorpay
**Notifications:** React-Toastify  

---

## 📦 Folder Structure
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── assets/
│ │ ├── context/
│ │ └── App.js
│ └── package.json
├── server/ # Express backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── config/
│ └── server.js
├── .env # Environment variables
├── package.json # Root dependencies
└── README.md

## ⚙️ Setup & Installation

### 🔧 Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- API Key from [ClipDrop](https://clipdrop.co/apis)
- Payment Gateway credentials (Stripe/Razorpay)



🔐 3. Environment Variables

Create a .env file inside the server/ directory and add:

PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
CLIPDROP_API_KEY=your_clipdrop_api_key
PAYMENT_KEY_ID=your_payment_gateway_key_id
PAYMENT_KEY_SECRET=your_payment_gateway_key_secret

▶️ 4. Run the Application
Run Backend
cd server
npx nodemon server.js

Run Frontend
cd client
npm start

🌐 Usage

Sign up or log in with your account.

Enter a text prompt and generate AI images.

Each generation consumes 1 credit.

Purchase more credits easily via payment gateway.

🧾 License

This project is licensed under the MIT License – feel free to modify and use it.



