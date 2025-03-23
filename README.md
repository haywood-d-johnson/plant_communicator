# 🌿 Plant Monitoring System

A full-stack IoT solution for monitoring soil moisture and fertility (NPK levels) using Arduino, Node.js/Express, Supabase, and a React Native mobile app.

---

## 🚀 Features

* Real-time monitoring of soil **moisture** and **fertility** (Nitrogen, Phosphorus, Potassium)
* Sensor data collection with **Arduino**
* Data transmission to **Node.js/Express backend**
* Cloud storage with **Supabase** (PostgreSQL-based backend-as-a-service)
* Mobile app built with **React Native** to display live and historical data

---

## 📊 Tech Stack

---

| Layer            | Language   | Notes                                         |
| ---------------- | ---------- | --------------------------------------------- |
| Arduino Firmware | C++        | Reads sensor data, sends HTTP POST to backend |
| Backend          | JavaScript | Node.js/Express API receives & stores data    |
| Cloud            | Supabase   | REST API or client libraries for data ops     |
| Frontend         | TS         | React Native app fetches/display data         |


## 📁 Project Structure

```
plant-monitor/
├── arduino/
|   ├── src/
│   |   └── PlantCommunicator.cpp
│   |   └── PlantCommunicator.h
|   └── main.cpp
|
├── backend/                           # Node.js + Express server
│   ├── src/
│   │   ├── routes/
│   │   │   └── dataRoutes.js          # POST route for incoming sensor data
│   │   ├── services/
│   │   │   └── supabaseService.js     # Insert data into Supabase
│   │   ├── controllers/
│   │   │   └── dataController.js      # Handle requests
│   │   ├── app.js                     # Express app setup
│   │   └── server.js                  # Server entry point
│   └── .env                           # Supabase keys and config
│
├── mobile/                          # React Native app
│   ├── src/
│   │   ├── components/
│   │   │   └── PlantDataCard.js       # Display plant data
│   │   ├── screens/
│   │   │   └── DashboardScreen.js     # Main UI screen
│   │   ├── services/
│   │   │   └── api.js                 # Fetch data logic
│   │   └── App.js
│   └── package.json
│
└── README.md                          # You're here!
```

---

## 🔧 Setup Instructions

### 1. Arduino

* Connect **soil moisture sensor** and **NPK sensor**
* Upload `plant_communicator.ino` sketch
* Update WiFi credentials and backend endpoint URL

### 2. Backend

```bash
cd backend
npm install
# Create .env with SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
npm start
```

### 3. Supabase

* Create project on [Supabase](https://supabase.io/)
* Create table `plant_readings` with columns:
  * `id` (UUID, primary key)
  * `moisture` (integer)
  * `nitrogen`, `phosphorus`, `potassium` (integers)
  * `created_at` (timestamp, default: now())

### 4. Frontend (React Native)

```bash
cd frontend
npm install
npm start
# Use Expo Go to view app on mobile device
```

---

## 🌐 API Endpoints

| Method | Endpoint      | Description                  |
| ------ | ------------- | ---------------------------- |
| POST   | `/api/data` | Submit sensor data           |
| GET    | `/api/data` | (Optional) Fetch latest data |

---

## 🌈 Screenshots

*Coming soon*

---

## 🚀 Future Improvements

* Push notifications for low moisture/fertility
* Multi-plant support with profiles
* Historical data graphs
* Light/relay module control

---

## 🚧 License

MIT License — feel free to use, modify, and contribute.

---

## 🌟 Author

**Haywood D. Johnson**

[GitHub](https://github.com/haywood-d-johnson) | [LinkedIn](https://www.linkedin.com/in/haywood-d-johnson/) |
