<div align="center">

# 🎥 UniStream — Campus Event Streaming Platform 🎥

### A powerful, real-time campus live-streaming platform built with the MERN stack & ZegoCloud

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-FF6B6B?style=for-the-badge&logo=vercel&logoColor=white)](https://your-deployed-demo.vercel.app)

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
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

## 💡 About

**UniStream** is a live-streaming MERN app designed to simplify event hosting for universities and organizations. Admins can create, start, and end events in real time. Students can join streams instantly. It’s Zoom meets event calendar — all in your browser.

---

## ✨ Features

- 🎥 Real-time live streaming via ZegoCloud
- 🧑‍💻 Role-based UI for **admins** and **users**
- 🗓️ Smart event scheduling and status labels (Not Started, Started, Ended)
- ✅ User authentication & authorization
- 📋 Event registration & dynamic event list
- 📦 RESTful API with token-protected routes
- 📱 Fully responsive, clean UI

---

## 🔄 How It Flows

1. **Signup/Login**: Users or admins log in using their credentials.
2. **Role Detection**: The app dynamically adjusts UI and functionality based on role (`admin` or `user`).
3. **Admins** can:
   - Create new events (title, description, date & time).
   - Start the event (status switches to “started”).
   - End the event (status updates to “ended”).
4. **Users** can:
   - View upcoming/ongoing events.
   - Join a live stream once the host starts it.
5. **ZegoCloud handles**: live video streaming, host-audience differentiation, and room lifecycle.
6. **After leaving**: Viewers return to dashboard. Hosts automatically trigger event end.

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
