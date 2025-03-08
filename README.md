# Chatbot Backend

This is the backend API for the **Chatbot Project**. It provides endpoints for storing and retrieving chat history, managing user messages and interacting with the frontend chatbot application built using **Next.js**.

## Features

- API to fetch chat history by a unique identifier.
- API to store new messages in the chat history.
- Simple and scalable architecture.

## Technologies Used

- **Node.js** (Backend runtime)
- **Express.js** (Web framework)
- **MongoDB** (Database)
- **Mongoose** (ODM for MongoDB)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Reyad02/chatbot-backend.git
```

### 2. Install dependencies

```bash
cd chatbot-backend
npm install
```

### 3. Set up environment variables

```bash
MONGODB_URI=<Your MongoDB connection URI>
PORT=5000
```

### 4. Run the server

```bash
npm run start:dev
```
