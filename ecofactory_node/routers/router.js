const express = require("express");
const register_controller = require("../controller/register_controller");
const authenticate_controller = require("../controller/authenticate_controller");
const complaint_controller = require("../controller/complaint_controller");

const router = express.Router();

router.post("/register", register_controller.registerMerchant);
router.post("/auth", authenticate_controller.authenticate);
router.post("/registercomplaints", complaint_controller.create_complaint);
router.get("/getAllComplaints", complaint_controller.getAllComplaints);
// router.post("/user", user_controller.existing_user);
// router.post("/auth", auth_controller.authenticate);
// router.get("/roles", roles_controller.all_roles);
// router.post("/role", roles_controller.existing_role);

module.exports = router;
