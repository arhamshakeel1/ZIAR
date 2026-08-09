# ZIAR.

> **Your next escape to the North is closer than you think.**

ZIAR is a modern travel website built around discovering destinations across Pakistan. It brings together local destinations, travel information, and live flight departures in a clean, minimal interface.

The name **ZIAR** comes from the Arabic word *Ziyārah* (زيارة), meaning **a visit** or **a journey to a place**. The idea behind the name is simple: travel doesn't always have to mean going far away. Sometimes, it means taking the time to visit the places that are already around us.

---

## ✦ Features

* **Destination Discovery**
  Browse destinations across Pakistan by category and search for specific locations.

* **Featured Destinations**
  Explore selected destinations through reusable destination cards containing information such as location, rating, price, duration, temperature, and elevation.

* **Live Flight Departures**
  View flight departures from Lahore International Airport using live flight data.

* **Flight Tracker**
  Browse available departures through a dedicated flight-tracking page.

* **Wishlist**
  Save destinations you're interested in and access them later.

* **Dark Mode**
  Switch between light and dark themes.

* **Responsive Design**
  Designed to work across desktop, tablet, and mobile screens.

* **Dynamic Booking Pages**
  Open individual destination booking pages using React Router route parameters.

---

## ✦ Tech Stack

### Frontend

* **React**
* **React Router**
* **Tailwind CSS**
* **JavaScript (ES6+)**
* **Vite**

### APIs

* **AeroDataBox** — flight departure data

### Deployment

* **Vercel**

---

## ✦ Project Structure

```text
src/
│
├── components/
│   ├── About/
│   ├── BookingDetails/
│   ├── Card/
│   ├── Destination/
│   ├── Flights/
│   ├── Home/
│   ├── Wishlist/
│   └── ...
│
├── Contexts/
│   ├── ThemeProvider.jsx
│   └── WishlistProvider.jsx
│
├── Data/
│   └── Destinations.js
│
├── hooks/
│   └── useFlightInfo.jsx
│
├── Layout.jsx
├── main.jsx
└── index.css
```

---

## ✦ React Concepts Used

ZIAR was built to practice and demonstrate several core React concepts:

* Functional components
* Props
* `useState`
* `useEffect`
* Custom hooks
* Context API
* React Router
* Dynamic routes
* Route loaders
* Conditional rendering
* Component decomposition
* Responsive Tailwind styling
* Lazy loading / code splitting

---

## ✦ Pages

| Page             | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| **Home**         | Hero section, search, featured destinations, and live departures |
| **Destinations** | Browse and filter available destinations                         |
| **Flights**      | View flight departures from Lahore                               |
| **Wishlist**     | View saved destinations                                          |
| **Book Now**     | Destination-specific booking page                                |
| **About**        | The meaning and story behind ZIAR                                |

---



## ✦ Performance

ZIAR uses several techniques to keep the experience lightweight:

* Lazy loading for non-essential pages
* Asynchronous flight-data fetching
* Responsive image sizing
* Lazy loading for images below the fold
* Component-based architecture
* Limited rendering of featured flight cards

Performance improvements are an ongoing part of the project, particularly around image optimization and mobile responsiveness.

---

## ✦ Design

ZIAR uses a restrained visual style built around:

* Warm off-white backgrounds
* Deep charcoal tones
* Muted brown accents
* Large editorial typography
* Generous spacing
* Minimal UI elements
* Responsive layouts

The goal is to make the interface feel more like a **travel journal than a conventional booking platform**.

---

## ✦ Future Improvements

Some planned improvements include:

* Improved mobile layouts
* Further image optimization with WebP/AVIF
* Better flight-data caching
* More detailed destination information
* Improved booking functionality
* More destinations across Pakistan
* Improved accessibility
* Performance optimization
* Backend integration for secure API requests

---



## License

This project is intended for educational and portfolio purposes.
