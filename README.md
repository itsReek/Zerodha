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


## 📂 Project Structure

```bash
Zerodha/
│
├── backend/                         # Node.js & Express Backend
│   ├── config/
│   │   └── db.js                    # MongoDB connection
│   │
│   ├── controllers/                # API business logic
│   │   ├── holdingsController.js
│   │   ├── positionsController.js
│   │   └── ordersController.js
│   │
│   ├── models/                     # MongoDB Schemas
│   │   ├── HoldingsModel.js
│   │   ├── PositionsModel.js
│   │   └── OrdersModel.js
│   │
│   ├── .env                        # Environment variables
│   ├── index.js                    # Server entry point
│   └── package.json
│
├── frontend/                       # Landing Website
│   ├── public/
│   │
│   └── src/
│       ├── components/             # Shared UI Components
│       ├── pages/                  # Home, Pricing, Signup, Support
│       ├── App.js                  # Routing configuration
│       └── index.js
│
├── dashboard/                      # Trading Dashboard
│   ├── public/
│   │
│   └── src/
│       ├── components/
│       │   ├── WatchList.js
│       │   ├── Holdings.js
│       │   ├── Positions.js
│       │   └── Summary.js
│       │
│       ├── App.js                  # Dashboard Layout
│       └── index.js
│
└── README.md
```

### 🏗️ Architecture Overview

* **Backend:** REST APIs built using Node.js, Express.js, and MongoDB.
* **Frontend:** Marketing website for product information, onboarding, and support.
* **Dashboard:** Separate React application providing trading, portfolio tracking, holdings, and position management functionalities.
* **Database:** MongoDB used for storing user portfolio, holdings, orders, and positions.


