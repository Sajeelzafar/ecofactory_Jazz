const db = require("../models");

class RegisterController {
  async registerMerchant(req, res) {
    const {
      registration,
      productSelection,
      businessInfos,
      directorInfos,
      authorisepersonnelinfos,
      settlementdetailsinfos,
      technologyproductcategoryinfos,
    } = req.body;
    const companyTypes = [
      "Partnerships",
      "Sole Properitor",
      "Private & Public",
    ];
    const merchantDetails = {
      fullName: registration.name,
      businessName: registration.businessName,
      mobileNumber: registration.mobileNumber,
      username: registration.username,
      email: registration.email,
      password: registration.password,
      role: registration.role,
      company_type: companyTypes[registration.company_type],
    };
    const productChoicesDetails = {
      paymentGateway: productSelection.onlinePaymentGateway,
      coorporateCollection: productSelection.corporateCollection,
      coorporateDisbursement: productSelection.corporateDisbursement,
    };
    const businessInfosDetails = {
      name: businessInfos.name,
      address: businessInfos.address,
      phone: businessInfos.phone,
      faxNumber: businessInfos.faxNumber,
      email: businessInfos.email,
      businessNature: businessInfos.businessNature,
      ntnIssueAuthority: businessInfos.ntnIssueAuthority,
      ntnNumber: businessInfos.ntnNumber,
      issueDate: businessInfos.issueDate,
      registerDate: businessInfos.registerDate,
      employeesNo: businessInfos.employeesNo,
      monthlyTurnover: businessInfos.monthlyTurnover,
      averageSalaryAmount: businessInfos.averageSalaryAmount,
      frequencyOfSalaryDisbursement:
        businessInfos.frequencyOfSalaryDisbursement,
    };

    const technologyproductDetails = {
      name: technologyproductcategoryinfos.name,
      email: technologyproductcategoryinfos.email,
      contactNumber: technologyproductcategoryinfos.contactNumber,
      productCategory: technologyproductcategoryinfos.productCategory,
      productSubCategory: technologyproductcategoryinfos.productSubCategory,
    };

    const settlementDetails = {
      bankName: settlementdetailsinfos.bankName,
      bankAccountNumber: settlementdetailsinfos.bankAccountNumber,
      accountHolderName: settlementdetailsinfos.accountHolderName,
      accountHolderMobileNumber:
        settlementdetailsinfos.accountHolderMobileNumber,
      accountHolderEmail: settlementdetailsinfos.accountHolderEmail,
    };

    let transaction;
    try {
      // Start a transaction
      transaction = await db.sequelize.transaction();

      // Create a new merchant with the provided details
      const newMerchant = await db.Merchant.create(merchantDetails, {
        transaction,
      });

      // Create product choices for the new merchant
      const newProductChoices = await db.ProductChoice.create(
        { ...productChoicesDetails, merchant_id: newMerchant.id },
        { transaction }
      );

      const newBusinessInfo = await db.BusinessInfo.create(
        { ...businessInfosDetails, merchant_id: newMerchant.id },
        { transaction }
      );

      directorInfos.map(async (directordetail) => {
        const directordetailinfo = {
          name: directordetail.name,
          email: directordetail.email,
          contactNumber: directordetail.contactNumber,
          title: directordetail.title,
        };
        await db.DirectorsInfo.create(
          { ...directordetailinfo, merchant_id: newMerchant.id },
          { transaction }
        );
      });

      authorisepersonnelinfos.map(async (authoriseDetail) => {
        const authoriseDetailinfo = {
          name: authoriseDetail.name,
          email: authoriseDetail.email,
          contactNumber: authoriseDetail.contactNumber,
          title: authoriseDetail.title,
        };
        await db.AuthorisePersonnelInfo.create(
          { ...authoriseDetailinfo, merchant_id: newMerchant.id },
          { transaction }
        );
      });

      const newTechnologyproductcategoryinfos =
        await db.TechnologyProductCategoryInfo.create(
          { ...technologyproductDetails, merchant_id: newMerchant.id },
          { transaction }
        );

      const newsettlementDetailsinfos = await db.SettlementDetailsInfo.create(
        { ...settlementDetails, merchant_id: newMerchant.id },
        { transaction }
      );

      // Commit the transaction
      await transaction.commit();

      res.send({
        status: 200,
        msg: "Merchant registered successfully",
      });
    } catch (error) {
      // If an error occurs, rollback the transaction
      if (transaction) await transaction.rollback();
      console.error("Error registering merchant:", error.message);
      res.send({
        status: 400,
        msg: `Error registering merchant: ${error.message}`,
      });
    }
  }

  async registerRole(req, res) {
    const {
      userData,
    } = req.body;
    const userDetails = {
      fullName: userData.fullName,
      businessName: userData.businessName,
      mobileNumber: userData.mobileNumber,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      role: userData.role,
      company_type: "Private",
      accountOpenerStatus: true,
      bankAccountStatus: true,
      higherManagementStatus: true,
    };
    let transaction;
    try {
      // Start a transaction
      transaction = await db.sequelize.transaction();

      // Create a new merchant with the provided details
      const newUser = await db.Merchant.create(userDetails, {
        transaction,
      });

      // Commit the transaction
      await transaction.commit();
      res.send({
        status: 200,
        msg: `${userData.role} registered successfully`,
      });
    } catch (error) {
      // If an error occurs, rollback the transaction
      if (transaction) await transaction.rollback();
      console.error("Error registering user:", error.message);
      res.send({
        status: 400,
        msg: `Error registering user: ${error.message}`,
      });
    }
  }
}

module.exports = new RegisterController();
