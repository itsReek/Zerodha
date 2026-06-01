# Zerodha Clone 📈

A full-stack financial trading and investment platform clone inspired by Zerodha, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application features a user-facing landing/marketing site, a functional trading dashboard, and a robust backend to manage data.

---

## 🚀 Features

- **Marketing/Landing Page:** Clean, responsive frontend clone of Zerodha's main website.
- **Interactive Trading Dashboard:** Separate dashboard application to view market watchlists, portfolio holdings, positions, and user profile metrics.
- **Real-time Simulation:** Placeholder functionality for monitoring price fluctuations and managing holdings.
- **Robust Backend API:** Secured endpoints to fetch market instruments, track user orders, and handle portfolio inventory.

---

## 🛠️ Tech Stack

- **Frontend & Dashboard:** React.js, HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas / Local MongoDB
- **Tools Used:** Axios, React Router DOM

---

📂 Project Structure
└── Zerodha/
    ├── backend/                    # Node.js & Express Server
    │   ├── config/                 # Database connection configurations
    │   │   └── db.js
    │   ├── controllers/            # Logic for handling API endpoints
    │   │   ├── holdingsController.js
    │   │   ├── positionsController.js
    │   │   └── ordersController.js
    │   ├── models/                 # MongoDB Mongoose Schemas
    │   │   ├── HoldingsModel.js
    │   │   ├── PositionsModel.js
    │   │   └── OrdersModel.js
    │   ├── .env                    # Environment variables (Ignored by git)
    │   ├── index.js                # Server entry point
    │   └── package.json            # Backend dependencies
    │
    ├── frontend/                   # Main Marketing & Landing Site (React)
    │   ├── public/                 # Static assets (images, logos, favicon)
    │   └── src/
    │       ├── components/         # Reusable UI parts (Navbar, Footer)
    │       ├── pages/              # Main route views (Home, Signup, Pricing, Support)
    │       ├── App.js              # Application routing configuration
    │       └── index.js            # Frontend entry point
    │
    └── dashboard/                  # Interactive Trading Portal (React)
        ├── public/                 # Dashboard static assets
        └── src/
            ├── components/         # Trading UI elements (Watchlist, Summary, Menu)
            │   ├── WatchList.js
            │   ├── Holdings.js
            │   └── Positions.js
            ├── App.js              # Dashboard layout and navigation
            └── index.js            # Dashboard entry point





