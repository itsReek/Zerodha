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

```text
Zerodha/
├── backend/      # Node.js & Express server with MongoDB integration
├── dashboard/    # React application for the inner trading platform
└── frontend/     # React application for the main marketing landing page


🔥 Setup & InstallationFollow these steps to get the project running locally on your machine.PrerequisitesMake sure you have Node.js and npm (or yarn) installed.Step 1: Clone the RepositoryBashgit clone [https://github.com/itsReek/Zerodha.git](https://github.com/itsReek/Zerodha.git)
cd Zerodha
Step 2: Backend SetupNavigate to the backend directory:Bash   cd backend
Install the server dependencies:Bash   npm install
Create a .env file in the root of the backend folder and add your MongoDB Connection URI:Code snippet   MONGO_URL=your_mongodb_connection_string
   PORT=3005
Start the backend server:Bash   node index.js
   # Or if you have nodemon installed: npm run dev / nodemon index.js
Step 3: Frontend Setup (Main Website)Open a new terminal window and navigate to the frontend directory:Bash   cd frontend
Install dependencies:Bash   npm install
Start the application:Bash   npm start
Step 4: Dashboard Setup (Trading Portal)Open a third terminal window and navigate to the dashboard directory:Bash   cd dashboard
Install dependencies:Bash   npm install
Start the dashboard platform:Bash   npm start
📝 API Reference (Backend)MethodEndpointDescriptionGET/allHoldingsFetch all long-term stock holdingsGET/allPositionsFetch active intra-day trading positionsPOST/newOrderPlace a new buy/sell market order🏆 LicenseThis project is licensed under the MIT License.
---

### 💡 Quick Tip for the Profile Page "About" Box:
While you are creating the README, you can also paste this quick 1-liner into your GitHub **About** description box so it matches your other repositories:

> *A full-stack Zerodha clone featuring a marketing landing page and an interactive trading.






