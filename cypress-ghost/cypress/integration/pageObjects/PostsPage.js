/// <reference types="cypress" />

class PostsPage {
  static getNewPostButton() {
    return cy.get('.gh-btn.gh-btn-green.ember-view[href="#/editor/post/"]');
  }

  static getTitleField() {
    return cy.get(".gh-editor-title");
  }

  static getDescriptionField(){
    return cy.get('.koenig-editor__editor.__mobiledoc-editor');
  }

  static getContentField() {
    return cy.get(".koenig-editor__editor");
  }

  static getPostUnformattedContentField() {
    return cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content");
  }

  static getHearderStatusLabel() {
    return cy.get(
      ".flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div"
    );
  }

  static getHearderStatusLabelForScheduledPosts() {
    return cy.get(
      "div.flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div>time"
    );
  }

  static getBackToPagesButton(){
    return cy.get('.blue.link.fw4.flex.items-center.ember-view[href="#/pages/"]');
  }

  static getBackToPostsPageButton() {
    return cy.get(
      '.blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]'
    );
  }

  //
  static getBackToPostsPageButtonLongText() {
    return cy.get('.gh-btn-red > span').contains('Leave');
  }

  static getPublishTrigger() {
    return cy.get(".gh-publishmenu-trigger");
  }

  static getPublishMenu() {
    return cy.get(".gh-publishmenu-trigger");
  }

  static getSetItLiveOption() {
    return cy.get(".gh-publishmenu-radio-button").first();
  }

  static getPublishLaterOption() {
    return cy.get(".gh-date-time-picker-timezone").first();
  }

  static getPublishButton() {
    return cy.get(
      "button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    );
  }

  static getScheduleButton() {
    return cy.get(
      "button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    );
  }

  static getSortByUpdateDateMenu() {
    return cy.get(".gh-contentfilter-menu.gh-contentfilter-sort");
  }

  static getSortByTypeMenu() {
    return cy.get(".gh-contentfilter-menu.gh-contentfilter-type");
  }

  static getRecentlyUpdatedMenuOption() {
    return cy.get('.ember-power-select-option[data-option-index="2"]');
  }

  static getScheduledMenuOption() {
    return cy.get('.ember-power-select-option[data-option-index="3"]');
  }

  static getAddCardButton() {
    return cy.get('.koenig-plus-menu-button.flex.justify-center.items-center.relative.w9.h9.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal');
  }

  static getCardMenu() {
    return cy.get('.koenig-plus-menu-button')
  }

  static getBookmarkOption() {
    return cy.get(
      'div:contains("Bookmark").f-supersmall.tracked-1.fw3.ma0.mt1'
    );
  }

  static getBookmarkInput() {
    return cy.get('input[name="url"]');
  }

  static getPostSettingsButton() {
    return cy.get(".post-settings");
  }

  static getSettingsMenu() {
    return cy.get(".settings-menu");
  }

  static getTagsTextbox() {
    return cy.get("#tag-input").first();
  }
  
  static getTagsDropdown() {
    return cy.get('.ember-basic-dropdown-content');
  }

  static getFirstTagFromList() {
    return cy.get('.ember-power-select-option[data-option-index="0"]');
  }

  static getCloseSettingsButton() {
    return cy.get(".close.settings-menu-header-action");
  }
}

export default PostsPage;
