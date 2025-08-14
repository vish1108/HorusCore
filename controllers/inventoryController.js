// controllers/inventoryController.js
class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }

    getInventoryPage(req, res) {
        const inventoryData = this.inventoryService.getInventory();
        res.render("inventory", { inventory: inventoryData });
    }
}

module.exports = InventoryController;
