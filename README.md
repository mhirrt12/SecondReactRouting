# 📘 React Routing Project Documentation

## 📌 Project Title

React Multi-Page Application with Layout (Navbar & Footer)

---

## 🎯 Objective

The purpose of this project is to build a simple React application that demonstrates:

* Page navigation using routing
* Reusable layout components (Header and Footer)
* Structured project organization

---

## 🛠️ Technologies Used

* React (JavaScript Library for UI)
* React Router DOM (for navigation between pages)
* CSS (for styling the application)

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── Header.jsx
 │    └── Footer.jsx
 ├── layout/
 │    └── Layout.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── About.jsx
 │    └── Contact.jsx
 ├── App.jsx
 ├── main.jsx
 └── styles.css
```

---

## ⚙️ How the System Works

### 1. Routing System

The application uses React Router to navigate between pages without reloading the browser.

* `/` → Home Page
* `/about` → About Page
* `/contact` → Contact Page

---

### 2. Layout Component

A Layout component is used to maintain a consistent structure across all pages.

It includes:

* Header (Navigation bar)
* Footer
* Dynamic content using `Outlet`

---

### 3. Header (Navigation)

The header contains navigation links:

* Home
* About
* Contact

It uses `NavLink` to highlight the active page.

---

### 4. Footer

The footer appears on all pages and contains:

* Copyright information
* Basic project description

---

### 5. Pages

Each page is a separate component:

* **Home:** Displays welcome message
* **About:** Describes the developer or project
* **Contact:** Contains a simple contact form

---

## 🎨 Styling

The application uses a global CSS file (`styles.css`) to:

* Style the navbar
* Design buttons and forms
* Improve layout and spacing

---

## 🚀 Features

* Single Page Application (SPA)
* Reusable components
* Clean and structured code
* Responsive basic design
* Active navigation highlighting

---

## ⚠️ Challenges Faced

* Missing imports (e.g., Link from react-router-dom)
* Incorrect routing setup
* Understanding nested routes and Outlet

---

## 📚 Lessons Learned

* How React Router works
* Importance of component structure
* Reusability using Layout
* Basic UI styling with CSS

---

## 🔮 Future Improvements

* Add Projects page
* Connect Contact form to backend
* Improve UI with animations
* Make fully responsive for mobile devices

---

## ✅ Conclusion

This project demonstrates a foundational understanding of React routing, component-based architecture, and layout design. It serves as a base for building more advanced web applications.

---
