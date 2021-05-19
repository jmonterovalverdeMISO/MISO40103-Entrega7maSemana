/// <reference types='cypress' />

class PagesListPage {
  static getLastPageLink() {
    return cy
      .get("a:visible.ember-view.permalink.gh-list-data.gh-post-list-title")
      .first();
  }

  static getLastScheduledPage() {
    return cy
      .get('span:contains("Scheduled").gh-content-status-draft.gh-badge.nowrap')
      .first();
  }

  static getLastDraftPage() {
    return cy
      .get(
        'span:contains("Draft").gh-content-status-draft.gh-badge.gh-badge-purple.nowrap'
      )
      .first();
  }

  static getLastPublishedPage() {
    return cy
      .get(
        'span:contains("PUBLISHED").gh-content-status-draft.gh-badge.gh-badge-pink.nowrap'
      )
      .first();
  }

  static getLastScheduledPageTitle() {
    return cy
      .get('span:contains("Scheduled").gh-content-status-draft.gh-badge.nowrap')
      .first()
      .parent()
      .parent()
      .parent()
      .find(".gh-content-entry-title");
  }

  static getLastDraftPageTitle() {
    return cy
      .get(".gh-content-status-draft")
      .contains('Draft')
      .first()
      .parents("li.gh-list-row")
      .find(".gh-content-entry-title");
  }

  static getLastPublishedPostTitle() {
    return cy
      .get('span:contains("Published").gh-content-status-published')
      .first()
      .parent()
      .parent()
      .parent()
      .find(".gh-content-entry-title");
  }
}
export default PagesListPage;
