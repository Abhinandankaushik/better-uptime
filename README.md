# Better-Uptime

Better-Uptime is a scalable website monitoring and health-check platform built to track uptime, response time, and availability of user-provided URLs.  
The system is designed with a **Redis-based queue architecture** and background **workers** to efficiently handle large-scale monitoring while presenting insights through graphs and dashboards.

---

## 🔍 Problem Statement

As the number of monitored websites increases, synchronous health checks become inefficient and hard to scale.  
Better-Uptime solves this by using an **asynchronous worker-based system** that enables horizontal scaling and reliable monitoring.

---

## ⚙️ Core Features

- Website uptime and health monitoring via URL checks  
- Redis-based queue system for scalable job processing  
- Worker–pusher architecture for parallel health checks  
- Response time and HTTP status tracking  
- Historical uptime data storage  
- Graph-based visualization of performance metrics  
- Support for monitoring multiple websites per user  

---

## 🧠 High-Level Architecture

1. User submits a website URL from the frontend.
2. Backend pushes a health-check job to Redis.
3. Worker services consume jobs and perform periodic checks.
4. Health-check results (status, latency, timestamp) are stored in the database.
5. Frontend fetches aggregated data and displays insights using graphs.

This design allows the system to scale easily by adding more workers.

---

## 🛠 Tech Stack

### Backend
- **Runtime**: Bun  
- **Backend APIs**: Node.js  
- **Queue System**: Redis (Worker + Pusher model)  
- **ORM**: Prisma  
- **Database**: PostgreSQL  

### Frontend
- **Framework**: Next.js  
- **UI Library**: React  
- **Charts**: Recharts / Chart.js (planned)  

### Infrastructure
- **Queue & Caching**: Redis  
- **Containerization**: Docker (planned)  
- **Deployment**: Cloud-ready, horizontally scalable  

---

## 📁 Planned Project Structure
```
better-uptime/
├── apps/
│ ├── web/   
│ └── api/    
├── workers/
│ └── health-check/  
├── prisma/
│ └── schema.prisma
├── packages/
│ └── shared/ 
└── README.md
 ```

---

## 🚧 Project Status

**Early Development Phase**

- Core system architecture defined  
- Redis queue and worker system under development  
- Prisma database schema in progress  
- Frontend dashboard planned  

---

## 🎯 Design Goals

- High scalability using background workers  
- Efficient and reliable health checks  
- Clear data visualization for uptime analytics  
- Simple, maintainable, and modular architecture  
- Developer-friendly setup using Bun  

---

## 🔮 Planned Enhancements

- Configurable health-check intervals  
- Downtime alerts (Email / Webhooks)  
- SSL certificate monitoring  
- Public status pages  
- Team and organization support  
- Retry and rate-limiting strategies  

---

## 🤝 Contributing

The project is currently in its initial phase.  
Contribution guidelines will be added once the core architecture is stable.

---

## 📄 License

License information will be added before the first stable release.
