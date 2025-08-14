# HorusCore Inventory Web Application

## 📌 Overview
HorusCore is a simple web application built as part of the **McCons Solutions Technical Assessment**.  
It displays a mock inventory in a clean, table-based UI styled with **Bootstrap** and custom CSS.

---

## 🚀 Features
- Displays HorusCore inventory data in an Excel-style table
- Follows **SOLID** principles and uses **Service Layer Pattern**
- **Mock data** (no database required)
- Responsive UI with Bootstrap
- Centered table layout for better presentation

---

## 🛠 Technologies Used
- **Node.js**
- **Express.js**
- **EJS** (Template Engine)
- **Bootstrap 5**
- **Custom CSS**

---

## 🧩 Design Pattern & SOLID Principle

### Design Pattern: **Service Layer Pattern**
The business logic is separated from request handling:
- `InventoryService` → Manages data retrieval
- `InventoryController` → Handles HTTP requests and responses

This makes the application modular, testable, and easier to maintain.

### SOLID Principle: **Dependency Inversion Principle (D)**
The controller depends on an abstraction (`InventoryService`) rather than a concrete data source.  
This allows for easy replacement of the data source in the future (e.g., switch from mock data to a database) without modifying the controller.

---

Sample data

| Inventory Id | Name | Description       |
| ------------ | ---- | ----------------- |
| 1001         | COG  | convenience goods |
| 2001         | SHG  | shopping goods    |
| 2008         | SPG  | specialty goods   |
| 3001         | UNG  | unsought goods    |


## 📦 Installation & Running Locally
```bash
# Clone this repository
git clone https://github.com/vish1108/HorusCore.git

# Navigate to project folder
cd HorusCore

# Install dependencies
npm install

# Start the server
node server.js


