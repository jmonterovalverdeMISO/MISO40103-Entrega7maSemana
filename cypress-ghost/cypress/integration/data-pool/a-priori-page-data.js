/// <reference types='cypress' />

class CreatePageAprioriData {

  static getPageLongContentTextData() {
    const pagesList = require("../../fixtures/Mokaroo-Page-LongContentText.json");
    return pagesList;
  }
    
  static getPageNaughtyContentData() {
    const pagesList = require("../../fixtures/Mokaroo-Page-NaughtyContent.json");
    return pagesList;
  }
    
  static getPageNaughtyTitleData() {
    const pagesList = require("../../fixtures/Mokaroo-Page-NaughtyTitle.json");
    return pagesList;
  }
}
export default CreatePageAprioriData;
