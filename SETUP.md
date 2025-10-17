# Zerodha Clone Setup Instructions

## Backend Setup

1. Navigate to backend directory:
```bash
cd Zerodha-main/backend
```

2. Install dependencies:
```bash
npm install
```

3. Seed the database with sample data:
```bash
npm run seed
```

4. Start the backend server:
```bash
npm start
```
Backend will run on http://localhost:3002

## Dashboard Setup

1. Navigate to dashboard directory:
```bash
cd Zerodha-main/dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the dashboard:
```bash
npm start
```
Dashboard will run on http://localhost:3000

## Frontend Setup (Landing Page)

1. Navigate to frontend directory:
```bash
cd Zerodha-main/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend:
```bash
npm start
```
Frontend will run on http://localhost:3001

## Login Credentials

- Username: `user`
- Password: `password`

## Features

- User authentication with session management
- Buy/Sell orders with backend integration
- Holdings and positions data from MongoDB
- Real-time order tracking
- Responsive dashboard interface

## Usage

1. Start backend server first
2. Start dashboard application
3. Login with provided credentials
4. Use the buy button on watchlist items to place orders
5. View orders in the Orders section
6. Holdings and positions are loaded from the database