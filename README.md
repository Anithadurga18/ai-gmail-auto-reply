# AI-Powered Gmail Auto-Reply Extension

A Chrome extension that generates context-aware, professional email replies directly inside Gmail using OpenAI.

## Features
- Injects an "Auto-Write" button into Gmail
- Extracts email content from the currently opened thread
- Sends content to a Node.js backend integrated with OpenAI
- Displays AI-generated replies in a custom popup
- One-click insertion into Gmail’s reply editor (no auto-send)

## Tech Stack
- JavaScript (Chrome Extensions)
- Node.js, Express
- OpenAI API

## How It Works
1. Chrome content script reads the open email in Gmail
2. Sends email text to a backend API
3. Backend calls OpenAI to generate a reply
4. Reply is returned and shown in a popup
5. User can copy or insert the reply into Gmail

## Setup (Local)
Backend:
cd backend
npm install
node server.js


Chrome Extension:
1. Open chrome://extensions
2. Enable Developer Mode
3. Click "Load unpacked"
4. Select the extension/ folder

## Security
- API keys are stored in environment variables
- No email content is stored
- Users control when replies are inserted

## Status
Working prototype (local backend).
