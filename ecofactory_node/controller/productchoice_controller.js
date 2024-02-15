const db = require("../models");

class ProductChoiceController {
  async create_productchoice(req, res) {
    const productchoice = db.ProductChoice;
    await productchoice.create({
      paymentGateway: req.body.paymentGateway,
      coorporateCollection: req.body.coorporateCollection,
      coorporateDisbursement: req.body.coorporateDisbursement,
      merchant_id: req.body.merchant_id,
    });
    res.status(201).json({ msg: "Product Choice created successfully" });
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

module.exports = new ProductChoiceController();
