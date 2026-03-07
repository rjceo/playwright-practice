import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.navigateTo('/login.jsp');
  }

  async login(username: string, password: string) {
    await this.page.fill('input[name="os_username"]', username);
    await this.page.fill('input[name="os_password"]', password);
    await this.page.click('input[name="login"]');
    await this.waitForLoad();
  }
}