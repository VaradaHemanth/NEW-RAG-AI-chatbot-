# NEW-RAG-AI-chatbot-
# Basic RAG Model AI Chatbot

This project implements a basic RAG (Retrieval-Augmented Generation) model AI chatbot using Java for the backend and HTML/CSS/JS for the frontend.

## Backend (Java)

The backend is implemented using Java and includes the following APIs:

- **Upload API**: Used for uploading text or documents, converting text into chunks, generating embeddings, and storing embeddings in a vector database.
- **Chat API**: Used for receiving user queries, generating responses using the RAG model, and storing conversation history in a database.

## Frontend (HTML/CSS/JS)

The frontend is implemented using HTML, CSS, and JavaScript and includes the following pages:

- **Upload Page**: Allows users to upload text or documents for training the RAG model.
- **Chat Interface Page**: Provides a basic chat interface where users can send messages and receive responses from the AI chatbot.

## Database

The vector database used for storing embeddings and conversation history is SQLite.

## Setup

To run the project:

1. Install Java and Maven for the backend.
2. Install a web server or use a simple HTTP server for serving the frontend pages.
3. Configure the backend APIs to handle text preprocessing, embedding generation, model interaction, and database operations.
4. Configure the frontend pages to interact with the backend APIs using JavaScript.
5. Run the backend server and open the frontend pages in a web browser.

