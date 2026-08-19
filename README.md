# 🚀 HackMate

### AI-Powered Hackathon Team Finder

HackMate is a platform designed to help students and developers find the right teammates for hackathons based on their skills, interests, experience, and availability.

Instead of searching through multiple communities and groups to find teammates, HackMate brings team discovery and hackathon discovery into one platform.

---

## Problem Statement

Finding the right teammates for a hackathon can be difficult.

Students often search through:

- WhatsApp groups
- Discord communities
- College groups
- LinkedIn
- Social media
- Hackathon communities

The biggest challenge is finding people with **complementary technical skills, similar interests, and compatible availability**.

HackMate aims to solve this problem through an intelligent teammate matching platform.

---

## Our Solution

HackMate allows users to:

1. Create a developer profile
2. Add their technical skills
3. Select their interests
4. Discover hackathons
5. Find compatible teammates
6. Build and manage hackathon teams

The platform will eventually use AI-powered matching to recommend teammates based on multiple profile factors.

---

## Features

### User Profiles

Create a developer profile containing:

- Name
- College
- Branch
- Technical skills
- Experience
- Interests
- GitHub
- LinkedIn
- Availability

###  AI Teammate Matching

Recommend potential teammates based on:

- Technical skills
- Complementary skills
- Interests
- Experience
- Availability
- Hackathon preferences

### Team Finder

Discover students and developers looking for hackathon teammates.

###  Hackathon Discovery

Find upcoming hackathons and explore their details.

###  Team Communication

Connect with teammates and communicate before forming a team.

### Personalized Dashboard

Manage:

- Profile
- Teams
- Hackathons
- Recommendations
- Applications

---

##  Current UI

The current frontend includes:

- Modern responsive navbar
- Hero section
- Features section
- Animated statistics
- How It Works section
- Footer
- Login page
- Registration page

---

## Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- React Router
- Axios
- React Icons
- Tailwind CSS

### Backend

- Java
- Spring Boot
- Spring Security
- REST APIs

### Database

- MongoDB

### AI / Matching

Planned technologies include:

- Python
- NLP
- Machine Learning
- Semantic similarity
- Skill matching

### Development Tools

- Git
- GitHub
- VS Code
- Postman

---

##  Project Structure

```text
HackMate/
│
├── frontend/
│   │
│   ├── public/
│   │
│   └── src/
│       │
│       ├── assets/
│       │
│       ├── components/
│       │   ├── Navbar/
│       │   ├── Hero/
│       │   ├── Features/
│       │   ├── Stats/
│       │   ├── HowItWorks/
│       │   └── Footer/
│       │
│       ├── pages/
│       │   ├── Home/
│       │   ├── Login/
│       │   └── Register/
│       │
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── backend/
│   │
│   └── src/
│       └── main/
│           └── java/
│               └── com/
│                   └── hackmate/
│                       └── backend/
│
├── docs/
│
├── .gitignore
└── README.md