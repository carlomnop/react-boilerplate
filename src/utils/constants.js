const baseUrl = "https://ubptest.appiancloud.com/";
const creditCardLibraryUrl = baseUrl + "suite/webapi/getCCATSLibrary";
const creditCardApplicationUrl = baseUrl + "suite/webapi/saveCCATSCreditCardApplication";
const creditCardContactUrl = baseUrl + "suite/webapi/saveCCATSContactDetails";
const creditCardPersonalUrl = baseUrl + "suite/webapi/saveCCATSPersonalDetails";
const creditCardWorkUrl = baseUrl + "suite/webapi/saveCCATSWorkDetails";
const creditCardOtherUrl = baseUrl + "suite/webapi/saveCCATSOtherCreditCard";
const creditCardConfirmUrl = baseUrl + "suite/webapi/saveCCATSConfirmDetails";
const creditCardGetApplicantInfoUrl = baseUrl + "suite/webapi/getCCATSApplicantInfoByCCID";
const creditCardGetApplicantInfoByContactUrl = baseUrl + "suite/webapi/getApplicantInfoByContactDetails";
const creditCardGetApplicantStatusUrl = baseUrl + "suite/webapi/getCCATSApplicationStatus";
const creditCardSaveApplicationAttachmentUrl = baseUrl + "suite/webapi/saveCCATSApplicationAttachment";
const creditCardConfirmOTP = baseUrl + "suite/webapi/authenticateOTP";

const username = "ccatstest";
const password = "test123456";
const auth = "Basic " +  btoa(username + ":" + password);
const config = {
  headers : {
    'Authorization' : auth
  }
};
