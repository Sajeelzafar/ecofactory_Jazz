const db = require("../models");

class ComplaintController {
  async create_complaint(req, res) {
    const { complaintsData } = req.body;
    let transaction;
    try {
      // Start a transaction
      transaction = await db.sequelize.transaction();

      // Create a new merchant with the provided details
      const newComplaint = await db.Complaint.create(complaintsData, {
        transaction,
      });

      // Commit the transaction
      await transaction.commit();
      res.status(201).json({ msg: "Complaint successfully registered" });
    } catch (error) {
      res.status(500).json({ msg: "Failed to register complaint" });
    }
  }

  async getAllComplaints(req, res) {
    try {
      const allComplaints = await db.Complaint.findAll();
      res.status(200).json(allComplaints);
    } catch (error) {
      console.error("Error fetching complaints:", error);
      res.status(500).json({ error: "Failed to fetch complaints" });
    }
  }

  //   async authenticate(req, res) {
  //     const user = db.User;
  //     const existingUser = await user.findOne({
  //         where: { username: req.body.user },
  //         include: [{ model: db.Role }],
  //     });
  //     if (req.body.user === "" || req.body.pwd === "") {
  //       return res.status(400).json({ msg: "Missing username or password" });
  //     }

  //     if (existingUser) {
  //       if (existingUser.dataValues.password === req.body.pwd) {
  //         console.log(existingUser.dataValues);
  //         return res.status(200).json(existingUser.dataValues);
  //       }
  //       return res.status(401).json({ msg: "Unauthorized" });
  //     }

  //     res.status(401).json({ msg: "Unauthorized" });
  //   }

  //   async index_user(req, res) {
  //     console.log("I'm here", req.body);

  //   }
}

module.exports = new ComplaintController();
