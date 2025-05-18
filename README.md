<div align="center">

# 🎥 UniStream — Campus Goes Live 🎥

## Live campus event platform built with real-time streaming tech and the MERN stack.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-FF6B6B?style=for-the-badge&logo=vercel&logoColor=white)](https://your-deployed-demo.vercel.app)

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![](https://img.shields.io/badge/ZegoCloud-005FFF?style=for-the-badge&logo=zeit&logoColor=white)

</div>

<br/>

<div align="center">
  <img src="public/screens/create_event.png" width="49%" />
  <img src="public/screens/event_list.png" width="49%" /> 
</div>

<div align="center">
  <img src="public/screens/live_stream_room.gif" width="80%" alt="UniStream demo" />
</div>

---

## About

**UniStream** is a live-streaming MERN app designed to simplify event hosting for universities and organizations. Admins can create, start, and end events in real time. Students can join streams instantly.It’s seamless live events and scheduling — all in your browser.

---

## Features

- 🎥 Real-time live streaming via ZegoCloud
- 🧑‍💻 Role-based UI for **admins** and **users**
- 🗓️ Smart event scheduling and status labels (Not Started, Started, Ended)
- ✅ User authentication & authorization
- 📋 Event registration & dynamic event list
- 📦 RESTful API with token-protected routes
- 📱 Fully responsive, clean UI

---

## 🔄 How It Flows

1. **Auth system** uses JWT tokens and bcrypt-hashed passwords to keep logins secure. All user data is validated and stored in MongoDB.

2. **Role-based access** is built-in. Admins can create, start, or end events. Users can register and join live events once they’ve started.

3. **Events are stored** in MongoDB with real-time status updates (`not started`, `started`, `ended`). API requests are secured using middleware that checks JWT tokens and roles.

4. **Live video streaming** is powered by ZegoCloud. Admins act as hosts, and users as the audience. Zego handles the whole room session lifecycle using its prebuilt SDK.

5. **Smart UI rendering**: The frontend (built with React) detects roles and displays features accordingly. Context is used to keep state consistent across pages.

6. **Clean exits**: If a host leaves, the event automatically ends via a backend trigger, updating its status so no one can rejoin.

7. **CORS and headers** are properly set up for cross-origin communication between Vercel (frontend) and Render (backend).

---

## 🧩 Tech Stack

| Layer            | Tech                      |
| ---------------- | ------------------------- |
| Frontend         | React, Vite, Tailwind CSS |
| Backend          | Node.js, Express          |
| Database         | MongoDB + Mongoose        |
| Auth             | JWT, bcrypt               |
| Video Streaming  | ZegoUIKit (ZegoCloud SDK) |
| State Management | React Context API         |
| Notifications    | react-hot-toast           |

---

## 🚀 Getting Started

### 🛠 Prerequisites

- Node.js v16+
- MongoDB running locally or via Atlas
- ZegoCloud app ID + server secret

---

### 🔧 Installation

```bash
git clone https://github.com/your-username/UniStream.git
cd UniStream
```
