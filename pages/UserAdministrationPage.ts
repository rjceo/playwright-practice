import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class UserAdministrationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async searchUser(username: string) {
    await this.page.fill('input[name="search"]', username);
    await this.page.click('input[value="Search"]');
    await this.waitForLoad();
  }

  async getUserList() {
    return this.page.locator('table#user_browser_table tbody tr');
  }

  // Add more methods as needed, like create user, edit user, etc.
}