# 🌍 Traveloop - Travel Booking Website

A full-stack travel booking web application inspired by luxury booking platforms, built with **React**, **Vite**, **Tailwind CSS**, and **Django REST Framework**.

---

## 📸 Overview & Features

- **Header / Navigation**: Sticky responsive navbar with the custom Traveloop logo, search shortcut, and Auth modal (Sign in & Create Account).
- **Hero Section**: High-resolution travel background with tagline *"Your Next Getaway Awaits"*, call-to-actions, and trust badges (Best Price Guarantee, Easy Booking, 24/7 Support, Secure Payments).
- **Search Bar**: Tabbed booking search (Stays, Flights, Experiences) with live destination, dates, and guest options.
- **Popular Destinations**: Curated cards with ratings for Bali, Dubai, Santorini, and Tokyo.
- **Featured Stays**: Handpicked hotel listings with pricing, badges (*Luxury*, *Beachfront*, *City View*, *Family Friendly*), and an interactive booking modal connected to the backend.
- **Why Choose Traveloop**: 4 core value proposition feature cards.
- **Luxury Stays Collection**: Showcasing overwater resorts and category pills (*Villas*, *Resorts*, *Apartments*, *Bungalows*, *Guest Houses*).
- **Traveler Reviews**: Customer testimonials with star ratings.
- **Latest Travel Guides**: Curated travel tips and destination blog cards.
- **Special Offer Banner**: Gradient promotional section offering up to 40% discount.
- **Call-to-Action**: "Book Your Dream Trip Today" prompt.
- **Stats Counter**: Highlighting 1M+ Happy Travelers, 5K+ Verified Hotels, 120+ Countries, and 24/7 Support.
- **Footer**: Newsletter subscription (connected to API), quick links, top destinations, contact details (Dhaka, Bangladesh), and social links.

---

## 🛠️ Tech Stack

### Frontend
- **React 19** with **Vite**
- **Tailwind CSS v4**
- **Lucide React** (Icons)
- **Axios** (API requests)
- **React Router DOM**

### Backend
- **Python 3.14**
- **Django 5.x** + **Django REST Framework**
- **django-cors-headers**
- **SQLite** database (pre-seeded with data)

---

## 🚀 How to Run the Application

### 1. Start the Django Backend Server

Open a terminal and run:
```powershell
cd S:\Projects\Traveloop\backend
.\venv\Scripts\python.exe manage.py runserver
```
The Django API will be live at: **http://127.0.0.1:8000/api/**  
The Django Admin panel is at: **http://127.0.0.1:8000/admin/**  
- **Admin Username**: `admin`  
- **Admin Password**: `admin123`

### 2. Start the React Frontend

Open a second terminal and run:
```powershell
cd S:\Projects\Traveloop\frontend
npm run dev
```
The React frontend will be live at: **http://localhost:5173/**

---

## 📡 REST API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/destinations/` | GET | List popular travel destinations |
| `/api/stays/` | GET | List featured stays & hotel rates |
| `/api/reviews/` | GET | List traveler testimonials |
| `/api/guides/` | GET | List travel tips & guide articles |
| `/api/bookings/` | POST / GET | Create or view stay bookings |
| `/api/newsletter/` | POST | Subscribe to newsletter |

---

## 📁 Project Structure

```
S:\Projects\Traveloop\
├── backend/
│   ├── api/                      # Django REST Framework App
│   │   ├── models.py             # Destination, Stay, Review, Guide, Booking, Newsletter
│   │   ├── serializers.py        # Model serializers
│   │   ├── views.py              # ViewSets for all models
│   │   ├── urls.py               # API route definitions
│   │   ├── admin.py              # Customized admin site
│   │   └── management/commands/  # seed_data command
│   ├── traveloop/                # Project settings & root URLs
│   ├── db.sqlite3                # Pre-seeded database
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── public/
│   │   ├── logo.png              # Full Traveloop brand logo
│   │   └── favicon.png           # Traveloop tab icon & emblem
│   ├── src/
│   │   ├── components/           # All UI sections matching the design
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── PopularDestinations.jsx
│   │   │   ├── FeaturedStays.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── LuxuryStays.jsx
│   │   │   ├── Reviews.jsx
│   │   │   ├── TravelGuides.jsx
│   │   │   ├── SpecialOffer.jsx
│   │   │   ├── BookDreamTrip.jsx
│   │   │   ├── Stats.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── services/
│   │   │   └── api.js            # Axios client with endpoints
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css             # Tailwind CSS & theme tokens
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

