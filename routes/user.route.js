const { Router } = require("express");
const {
  addUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");

const router = Router();

router.post("/createUser", addUser);
router.get("/getAllUsers", getAllUsers);
router.put("/update/:id", updateUser);
router.delete("/deleteUser/:userId", deleteUser);

module.exports = router;
