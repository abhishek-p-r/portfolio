🚀 SHL Assessment Recommender
Project info

Live URL: https://shl-assessment-provider.onrender.com

How can I edit this code?

There are several ways of editing your application.

Use your preferred IDE

You can work locally using your own IDE by cloning the repository and running the project on your machine.

The only requirement is having Node.js & npm installed.

Follow these steps:

# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Start the development server with auto-reloading.
npm run dev
Edit a file directly in GitHub
Navigate to the desired file(s)
Click the "Edit" button (pencil icon) at the top right of the file view
Make your changes and commit the changes
Use GitHub Codespaces
Navigate to the main page of your repository
Click on the Code button (green button) near the top right
Select the Codespaces tab
Click on New codespace to launch a new Codespace environment
Edit files directly within the Codespace
Commit and push your changes once you're done
🛠️ What technologies are used for this project?

This project is built with:

Next.js 16
React 19
TypeScript
Tailwind CSS
shadcn/ui
Node.js API Routes
Google Gemini API
Vector-based Semantic Search
🌐 How can I deploy this project?

This project can be deployed easily using platforms like:

Render
Vercel
Netlify

For production deployment:

npm run build
npm start

Make sure to configure your environment variables:

GOOGLE_API_KEY=your_gemini_api_key_here
⚙️ Environment Setup

Create a .env.local file in the root directory:

GOOGLE_API_KEY=your_gemini_api_key_here
📂 Project Structure
/app
  /api
    /chat
    /catalog
    /health

/components
  /chat-interface.tsx
  /assessment-card.tsx
  /message-bubble.tsx

/lib
  /recommendation-engine.ts
  /shl-scraper.ts

/hooks
  /use-chat.ts
✨ Features
Conversational AI Chat Interface
SHL Assessment Recommendations
Semantic Search Engine
Real-Time Chat Experience
Production-Ready Backend APIs
Responsive UI Design
Multi-turn Conversation Support
Demo Mode without API Key
Assessment Ranking System
📡 API Endpoints
POST /api/chat

Handles conversational recommendation requests.

GET /api/catalog

Returns all SHL assessments.

GET /api/health

Checks application health status.

🚀 Live Deployment
🌐 Application URL

https://shl-assessment-provider.onrender.com

📜 License

This project is developed for educational and production-ready demonstration purposes.

👨‍💻 Project Status
Property	Value
Version	1.0.0
Status	Production Ready
Deployment	Render
Last Updated	May 2026
🙌 Acknowledgements
Google Gemini API
Next.js
React
Tailwind CSS
shadcn/ui
SHL Assessment Framework Inspiration
