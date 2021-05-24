/// <reference types="cypress" />

class PagesPage {

  static getLeaveButton() {
    return cy.get(".gh-btn.gh-btn-red");
  }

  static getNewPageButton() {
    return cy.get('.view-actions a[href="#/editor/page/"]').first();
  }

  static getTitleField() {
    return cy.get(".gh-editor-title");
  }

  static getContentField() {
    return cy.get(".koenig-editor__editor");
  }

  static getHeaderStatusLabel() {
    return cy.get(".gh-editor-header span").first();
  }

  static getHeaderStatusLabelForScheduledPages() {
    return cy.get(
      "div.flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div>time"
    );
  }

  static getBackToPagesPageButton() {
    return cy.get(
      '.blue.link.fw4.flex.items-center.ember-view[href="#/pages/"]'
    );
  }

  static getPublishTrigger() {
    return cy.get(".gh-publishmenu-trigger");
  }

  static getPublishMenu() {
    return cy.get(".gh-publishmenu-dropdown");
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
    return cy.get('.ember-power-select-option[data-option-index="2"]').first();
  }

  static getScheduledMenuOption() {
    return cy.get('.ember-power-select-option[data-option-index="3"]').first();
  }

  static getAddCardButton() {
    return cy.get(
      "button.koenig-plus-menu-button.flex.justify-center.items-center.relative.w9.h9.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal"
    ).first();
  }

  static getBookmarkOption() {
    return cy.get(
      'div:contains("Bookmark").f-supersmall.tracked-1.fw3.ma0.mt1'
    ).first();
  }

  static getPostSettingsButton() {
    return cy.get(".post-settings").first();
  }
  
  static getSettingsMenu() {
    return cy.get(".settings-menu").first();
  }

  static getDeleteDialog() {
    return cy.get(".fullscreen-modal").first();
  }

  static getDeleteButtonPage() {
    return cy.get(".settings-menu .settings-menu-delete-button").first();
  }

  static getAcceptDeleteButtonPage() {
    return cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").first();
  }

  static getCloseSettingsButton() {
    return cy.get(".close.settings-menu-header-action").first();
  }
}
export default PagesPage;
