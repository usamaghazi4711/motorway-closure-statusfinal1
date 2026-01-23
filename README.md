# Motorway Closure Status System

## Setup Instructions

### Backend Setup
1. Navigate to backend folder:
```bash
   cd backend
   npm install
```

2. Create `.env` file:
```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
```

3. Run backend:
```bash
   npm start
```

### Frontend Setup
1. Install dependencies:
```bash
   npm install
```

2. Create `.env` file:
```env
   VITE_API_URL=http://localhost:5000/api
```

3. Run frontend:
```bash
   npm run dev
```

## Deployment

### Hostinger Deployment
1. Push code to GitHub
2. In Hostinger, create Node.js app from GitHub
3. Set environment variables in Hostinger panel
4. Deploy!

### MongoDB Setup
1. Create free account at MongoDB Atlas
2. Create cluster and database
3. Get connection string
4. Add to environment variables
