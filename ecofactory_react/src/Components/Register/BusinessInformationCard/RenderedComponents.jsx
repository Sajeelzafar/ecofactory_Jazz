import React from 'react';
import BusinessInformation from "./formRenderComponents/BusinessInformation";
import AccountOpeningTemplates from "./formRenderComponents/AccountOpeningTemplates";
import AuthorisePersonnelDetails from "./formRenderComponents/AuthorisePersonnelDetails";
import DirectorsInformation from "./formRenderComponents/DirectorsInformation";
import ProductCategory from "./formRenderComponents/ProductCategory";
import SettlementDetails from "./formRenderComponents/SettlementDetails";
import TechnologyPersonOfContact from "./formRenderComponents/TechnologyPersonOfContact";
import TermsAndConditions from "./formRenderComponents/TermsAndConditions";

const RenderedComponents = ({ selectedValue }) => {
    switch (selectedValue) {
      case 'businessInformation':
        return <BusinessInformation />;
      case 'directorsInformation':
        return <DirectorsInformation />;
      case 'authorisePersonnelDetails':
        return <AuthorisePersonnelDetails />;
      case 'technologyPersonOfContact':
        return <TechnologyPersonOfContact />;
      case 'productCategory':
        return <ProductCategory />;
      case 'settlementDetails':
        return <SettlementDetails />;
      case 'accountOpeningTemplates':
        return <AccountOpeningTemplates />;
      case 'termsAndConditions':
        return <TermsAndConditions />;
      default:
        return <></>;
    }
  };
  
export default RenderedComponents;