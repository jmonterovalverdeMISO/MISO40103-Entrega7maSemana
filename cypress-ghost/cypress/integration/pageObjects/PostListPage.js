/// <reference types='cypress' />

class PostListPage {
  static getLastPostLink() {
    return cy
      .get("a:visible.ember-view.permalink.gh-list-data.gh-post-list-title")
      .first();
  }

  static getLastScheduledPost() {
    return cy
      .get('span:contains("Scheduled").gh-content-status-draft.gh-badge.nowrap')
      .first();
  }

  static getLastDraftPost() {
    return cy
      .get(
        'span:contains("Draft").gh-content-status-draft.gh-badge.gh-badge-purple.nowrap'
      )
      .first();
  }

  static getLastPublishedPost() {
    return cy
      .get(
        'span:contains("PUBLISHED").gh-content-status-draft.gh-badge.gh-badge-pink.nowrap'
      )
      .first();
  }

  static getLastScheduledPostTitle() {
    return cy
      .get('span:contains("Scheduled").gh-content-status-draft.gh-badge.nowrap')
      .first()
      .parent()
      .parent()
      .parent()
      .find(".gh-content-entry-title");
  }

  static getLastDraftPostTitle() {
    return cy
      .get(
        'span:contains("Draft").gh-content-status-draft.gh-badge.gh-badge-purple.nowrap'
      )
      .first()
      .parent()
      .parent()
      .parent()
      .find(".gh-content-entry-title");
  }

  static getLastPublishedPostTitle() {
    return cy
      .get(".gh-content-status-published")
      .first()
      .parents("li.gh-list-row")
      .find(".gh-content-entry-title");
  }
}

export default PostListPage;
