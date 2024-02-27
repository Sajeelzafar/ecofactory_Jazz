const db = require("../models");

class ComplaintController {
  async create_complaint(req, res) {
    const { complaintsData } = req.body;
    let transaction;
    try {
      // Start a transaction
      transaction = await db.sequelize.transaction();

      // Create a new merchant with the provided details
      const newComplaint = await db.Complaint.create(
        { ...complaintsData, status: "Unanswered", anwserToMessage: "" },
        {
          transaction,
        }
      );

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

  async getComplaint(req, res) {
    const { id } = req.params;
    try {
      // Find the complaint with the specified id
      const complaint = await db.Complaint.findByPk(id);
      if (!complaint) {
        return res.status(404).json({ error: 'Complaint not found' });
      }
      // Return the complaint data
      return res.status(200).json(complaint);
    } catch (error) {
      console.error('Error fetching complaint:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateComplaint(req, res) {
    const { id } = req.params;
    const { answer } = req.body;
    console.log(id, answer);
    try {
      // Find the complaint with the specified id
      const complaint = await db.Complaint.findByPk(id);
      if (!complaint) {
        return res.status(404).json({ error: 'Complaint not found' });
      }
      await complaint.update({ anwserToMessage: answer, status: "Answered" });
      return res.status(200).json(complaint);
    } catch (error) {
      console.error('Error fetching complaint:', error);
      // return res.status(500).json({ error: 'Internal server error' });
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
