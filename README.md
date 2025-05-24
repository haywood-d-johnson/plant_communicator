# 🌿 RootReader

A full-stack IoT solution for monitoring soil moisture and fertility (NPK levels) using Arduino, Node.js/Express, and a React Native mobile app.

**Note:** This README reflects the initial stages of development, focusing on a single probe and local data storage before full cloud and mobile app integration.

## 🚀 Features

* **Single Probe Data Collection:** Reads data from various sensors (soil moisture, temperature, humidity, light level) using an Arduino.
* **Local Data Storage (Initial):** Stores sensor readings in a local SQLite database for immediate testing and data logging.
* **Backend with Plant API Integration:** Node.js/Express backend to:
  * Receive sensor data.
  * Store data locally (SQLite).
  * Integrate with a plant information API to fetch plant details.
  * Manage plant profiles.
* **Plant Profiles:** Ability to create and manage profiles for individual plants, associating sensor data with them.

## 📊 Tech Stack

---

| Layer         | Language   | Notes                                                                                                  |
| ------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| Arduino       | C++        | Reads sensor data, sends data (initially via serial, later potentially HTTP).                          |
| Backend       | JavaScript | Node.js/Express API receives & stores data (initially SQLite), integrates**Perenual Plant API**. |
| Local Storage | SQLite     | File-based database for local data logging and testing.                                                |
| Frontend      | HTML/JS    | Potential future web interface for data visualization.                                                 |
| Plant API     | REST       | **Perenual API** (https://perenual.com/) for fetching plant information.                         |

...

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

### 1. **Arduino**

* Connect your chosen sensors (soil moisture, temperature/humidity, light) to the Arduino and breadboard. Refer to their respective datasheets for correct wiring.
* Update the `arduino/src/PlantSensorReader.cpp` sketch to read data from your connected sensors.
* Initially, the Arduino code will output sensor data to the Serial Monitor in a consistent format (e.g., comma-separated values).

### 2. Backend

* Create a `.env` file in the `backend` directory and add your Perenual API key:
  ``PERENUAL_API_KEY=YOUR_PERENUAL_API_KEY``

```bash
cd backend
npm install
npm start
```

### 3. Frontend (React Native)

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

* [ ] **Robust Arduino Communication:** Implement reliable data transmission from the Arduino to the backend (potentially HTTP over Wi-Fi or serial).
* [ ] **Plant API Integration:** Fully integrate the chosen plant API to fetch and store detailed plant information.
* [ ] **Web Frontend Development:** Build a user-friendly web interface for data visualization and plant profile management.
* [ ] **Historical Data Analysis & Graphs:** Implement functionality to display historical sensor data and generate charts.
* [ ] **Alerts & Notifications:** Set up alerts for out-of-range sensor readings.
* [ ] **Multi-Probe Support:** Extend the system to handle data from multiple probes.

---

## 🚧 License

MIT License — feel free to use, modify, and contribute.

---

## 🌟 Author

**Haywood D. Johnson**

[GitHub](https://github.com/haywood-d-johnson) | [LinkedIn](https://www.linkedin.com/in/haywood-d-johnson/) | [Website](https://www.hdjohnson-dev.online/) |
