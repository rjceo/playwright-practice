import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async gotoAdmin() {
    await this.page.click('#admin-menu-link');
    await this.waitForLoad();
  }

  async gotoUserManagement() {
    await this.gotoAdmin();
    await this.page.click('a[href*="UserBrowser"]');
    await this.waitForLoad();
  }
}