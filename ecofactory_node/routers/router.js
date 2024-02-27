const express = require("express");
const register_controller = require("../controller/register_controller");
const authenticate_controller = require("../controller/authenticate_controller");
const complaint_controller = require("../controller/complaint_controller");
const user_controller = require("../controller/user_controller");

const router = express.Router();

router.post("/register", register_controller.registerMerchant);
router.post("/registerRole", register_controller.registerRole);
router.post("/auth", authenticate_controller.authenticate);
router.post("/registercomplaints", complaint_controller.create_complaint);
router.get("/getAllComplaints", complaint_controller.getAllComplaints);
router.get("/getComplaint/:id", complaint_controller.getComplaint);
router.post("/updateComplaint/:id", complaint_controller.updateComplaint);
router.get("/getAllUsers", user_controller.getAllUsers);
router.get("/getUser/:id", user_controller.getUser);


// router.post("/user", user_controller.existing_user);
// router.post("/auth", auth_controller.authenticate);
// router.get("/roles", roles_controller.all_roles);
// router.post("/role", roles_controller.existing_role);

module.exports = router;
