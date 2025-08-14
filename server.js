// server.js
const express = require("express");
const path = require("path");
const InventoryService = require("./services/inventoryService");
const InventoryController = require("./controllers/inventoryController");

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Dependency Injection
const inventoryService = new InventoryService();
const inventoryController = new InventoryController(inventoryService);

// Routes
app.get("/inventory", (req, res) => inventoryController.getInventoryPage(req, res));

app.listen(3000, () => console.log("Server running on http://localhost:3000/inventory"));
