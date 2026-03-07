import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { UserAdministrationPage } from '../pages/UserAdministrationPage';

test.describe('Jira Tests', () => {
  test('Login and access user administration', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const userAdminPage = new UserAdministrationPage(page);

    // Assuming Jira is running on localhost:8080, adjust as needed
    await page.goto('http://localhost:8080/login.jsp');

    await loginPage.login('admin', 'admin'); // Replace with actual credentials

    // After login, on dashboard, go to user management
    await dashboardPage.gotoUserManagement();

    // Now on user admin page
    await expect(page).toHaveTitle(/User Browser/);

    // Example: search for a user
    await userAdminPage.searchUser('testuser');
  });
});