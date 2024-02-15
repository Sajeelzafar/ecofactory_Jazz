const db = require("../models");
const {
  Merchant,
  AuthorisePersonnelInfo,
  BusinessInfo,
  DirectorsInfo,
  ProductChoice,
  TechnologyProductCategoryInfo,
  SettlementDetailsInfo,
} = require("../models");

class AuthenticateController {
  async authenticate(req, res) {
    const merchant = db.Merchant;
    try {
      const existingMerchant = await merchant.findOne({
        where: { username: req.body.username },
      });
      if (existingMerchant?.dataValues) {
        if (existingMerchant?.dataValues?.password === req.body.pwd) {
          await Merchant.findOne({
            where: { username: existingMerchant.username },
            include: [
              { model: AuthorisePersonnelInfo },
              { model: BusinessInfo },
              { model: DirectorsInfo },
              { model: ProductChoice },
              { model: TechnologyProductCategoryInfo },
              { model: SettlementDetailsInfo },
            ],
          })
            .then((merchantDetails) => {
              return res.status(200).json({
                status: 200,
                merchantDetails,
                msg: "Successfully Signed in",
              });
            })
            .catch((error) => {
              // Handle errors
              console.error("Error fetching data:", error);
              res.status(500).json({ msg: "Internal Server Error" });
            });
        } else {
          res.status(401).json({ msg: "Incorrect Username or Password" });
        }
      } else {
        res.status(401).json({ msg: "Incorrect Username or Password" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
}

module.exports = new AuthenticateController();
