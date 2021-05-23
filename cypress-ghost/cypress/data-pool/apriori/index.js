import pageLongContentText from './pageLongContentText.json';
import pageNaughtyContent from './pageNaughtyContent.json';
import pageNaughtyTitle from './pageNaughtyTitle.json';

class AprioriPool {
  getPageLongContentTextData() {
    return pageLongContentText;
  }
    
  getPageNaughtyContentData() {
    return pageNaughtyContent;
  }
    
  getPageNaughtyTitleData() {
    return pageNaughtyTitle;
  }
}

export default AprioriPool;
