# Learning Support Provider Directory

This is a simple React app built using Vite. It shows a list of learning support providers that parents can browse through.

Right now, the app includes:
- A homepage that lists providers
- A search bar to filter by name or specialization
- Each provider card shows basic info and a "View Details" link
- detail page for each provider
- 404 error handling for unknown routes

## 🚀 Tech Stack

- React (with Hooks)
- React Router DOM
- Vite
- Plain CSS

## 📂 Project Structure
src/
├── components/
│   └── ProviderCard.jsx
├── data/
│   └── providers.json
├── pages/
│ ├── ProviderList.jsx
│ ├── ProviderDetail.jsx
│ └── NotFound.jsx
├── App.css
├── App.jsx
├── index.css
├── main.jsx


## ✅ Completed
- Vite + React setup

- Routing with React Router DOM

- Provider list page

- Search functionality

- Basic responsive CSS layout

- Provider Detail page (/providers/:id) with full information and error handling

- 404 NotFound page with fallback routing

## 📌 Upcoming

- Deploy live project [(Netlify)](https://mir-provider-app.netlify.app/)
- Final UI polish (padding, spacing)


## 🛠 Setup Instructions

1. Clone the repo:

bash
git clone https://github.com/Khan4218/Provider-directory.git
cd Provider-directory

2. Install dependencies:
npm install

3. Run the project:
npm run dev
Then visit http://localhost:5173/ in your browser.

## author
This project is part of an assessment task.
Built by Mir Akbar Ali Khan


