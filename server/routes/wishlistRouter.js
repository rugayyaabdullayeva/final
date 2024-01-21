const express = require("express");
const wishlistController = require("../controller/wishlistController");

const router = express.Router();

router.post("/wishlist", wishlistController.AddWishlist);
router.get("/wishlist", wishlistController.GetWishlist);
router.get("/wishlist/:id", wishlistController.GetWishlistById);
router.delete("/wishlist/:id", wishlistController.DeleteWishlist);
router.put("/wishlist/:id", wishlistController.UpdateWishlist);

module.exports = router;
