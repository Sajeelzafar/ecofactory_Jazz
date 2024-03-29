const db = require("../models");

class UserController {
  async getAllUsers(req,res) {
    try {
      const allUsers = await db.Merchant.findAll();
      res.status(200).json(allUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  }

  async getUser(req, res) {
    const { id } = req.params;
    try {
      // Find the complaint with the specified id
      const user = await db.Merchant.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Return the user data
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  async create_merchant(req, res) {
    const merchant = db.Merchant;
    const existingMerchant = await merchant.findOne({
      where: { email: req.body.email },
    });
    if (existingMerchant) {
      return res
        .status(409)
        .json({ status: 409, msg: "Merchant already exists" });
    } else {
      await merchant.create({
        fullName: req.body.fullName,
        businessName: req.body.businessName,
        mobileNumber:req.body.mobileNumber,
        username:req.body.username,
        email:req.body.email,
        password: req.body.pwd,
        business_select: req.body.business_select
      });
      res.status(201).json({ msg: "Merchant created successfully" });
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

module.exports = new UserController();
