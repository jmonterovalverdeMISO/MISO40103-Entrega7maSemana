import pageLongContentText from './pageLongContentText.json';
import pageNaughtyContent from './pageNaughtyContent.json';
import pageNaughtyTitle from './pageNaughtyTitle.json';
import postTimesDiffFormat from './postTimesDiffFormat.json';
import postDatesDiffFormat from './postDatesDiffFormat.json';
import postDifferentLanguages from './postDifferentLanguages.json';
import postLongContentText from './postLongContentText.json';
import postNaughtyContent from './postNaughtyContent.json';
import postNaughtyTitle from './postNaughtyTitle.json';
import postRandomNumbers from './postRandomNumbers.json';
  
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

  getPostTimesDiffFormat() {
    return postTimesDiffFormat;
  }

  getPostDatesDiffFormat() {
    return postDatesDiffFormat;
  }

  getPostDifferentLanguages() {
    return postDifferentLanguages;
  }

  getPostLongContentText() {
    return postLongContentText;
  }

  getPostNaughtyContent() {
    return postNaughtyContent;
  }

  getPostNaughtyTitle() {
    return postNaughtyTitle;
  }

  getPostRandomNumbers() {
    return postRandomNumbers;
  }
}

export default AprioriPool;
