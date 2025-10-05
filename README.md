
# Imagix - AI Text-to-Image Generator (MERN Stack)

Imagix is a full-stack AI SaaS application built using the MERN stack (MongoDB, Express, React, Node.js). It enables users to generate high-quality AI images from text prompts using the ClipDrop API. Imagix includes a secure authentication system, a credit-based image generation model, and a payment gateway that allows users to purchase additional credits directly within the platform.

---

## Overview

Imagix allows users to turn their imagination into visuals. Each user can register, log in, and generate AI-generated images using their available credits. Every image generation consumes one credit. When credits run out, users can securely purchase more through the integrated payment gateway.

This project demonstrates the implementation of a scalable AI SaaS model with an interactive frontend, robust backend, and real-time payment integration.

---

## Features

- **AI Text-to-Image Generation:** Uses the ClipDrop API to convert text prompts into realistic images.
- **User Authentication:** Secure login and registration system with JWT authentication and MongoDB for user data storage.
- **Credit System:** Users receive credits upon account creation and can use them to generate images.
- **Online Payment Integration:** Integrated payment gateway (Stripe/Razorpay) for purchasing additional credits.
- **Responsive UI:** Fully responsive frontend built with React and Tailwind CSS.
- **Notifications:** Real-time feedback using toast notifications.
- **Database Management:** MongoDB for storing user details, credits, and image history.

---

## Technology Stack

**Frontend:** React.js, Tailwind CSS, Axios, Framer Motion  
**Backend:** Node.js, Express.js, JWT Authentication, Mongoose  
**Database:** MongoDB Atlas  
**AI API:** ClipDrop API  
**Payment Gateway:** Stripe / Razorpay  
**Notifications:** React-Toastify

---

## Folder Structure

```

imagix/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                 # Express backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── .env                    # Environment variables
├── package.json
└── README.md

````

---

## Installation and Setup

### Prerequisites

- Node.js (v18 or above)
- MongoDB Atlas account
- ClipDrop API key
- Payment Gateway credentials (Stripe or Razorpay)

---

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/imagix.git
cd imagix
````

---

### 2. Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file in the `server/` directory and include the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIPDROP_API_KEY=your_clipdrop_api_key
PAYMENT_KEY_ID=your_payment_gateway_key_id
PAYMENT_KEY_SECRET=your_payment_gateway_key_secret
```

---

### 4. Run the Application

#### Run Backend

```bash
cd server
npx nodemon server.js
```

#### Run Frontend

```bash
cd client
npm start
```

The application will run locally on:

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:5000](http://localhost:5000)

---

## Usage

1. Register for a new account or log in with an existing one.
2. Enter a descriptive text prompt in the generator input field.
3. Click on “Generate” to create AI-powered images using credits.
4. If credits are insufficient, purchase more through the integrated payment option.
5. View previously generated images in your dashboard.

---

## API Integration

**AI Image Generation:**
Imagix uses the ClipDrop API for generating AI-based images from text inputs.
Refer to [ClipDrop API documentation](https://clipdrop.co/apis) for more information.

---

## Payment System

Imagix supports credit purchase through an online payment gateway.
Each successful transaction updates the user’s credit balance in MongoDB in real-time.
All sensitive payment and authentication data are handled securely through environment variables.

---

## Screenshots



---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it with attribution.

---

## Author
(https://github.com/Shivi-013)





