import { Page, expect, test } from '@playwright/test';

test.describe('로그인 페이지 ', () => {
  const BASE_URL = 'http://localhost:3000';

  let page: Page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const context = await browser.newContext(contextOptions);
    page = await context.newPage();

    await page.goto(BASE_URL);
  });

  test('로그인 페이지로 이동한다.', async () => {
    await page.locator('[aria-label="login-link"]').click();
    await expect(page).toHaveURL(`${BASE_URL}/i/flow/login`);
  });

  test.describe('로그인을 시도한다.', () => {
    test.beforeAll(async ({ browser, contextOptions }) => {
      const context = await browser.newContext(contextOptions);
      page = await context.newPage();

      await page.goto(BASE_URL);
      await page.locator('[aria-label="login-link"]').click();
    });

    test('아이디와 비밀번호를 입력하지 않고, 로그인을 시도한다.', async () => {
      await page.locator('[aria-label="login-button"]').click();
      await expect(page.locator('[aria-label="error-login-userId"]')).toBeVisible();
      await expect(page.locator('[aria-label="error-login-password"]')).toBeVisible();
    });

    test('아이디와 비밀번호를 입력하고, 로그인을 시도한다.', async () => {
      await page.locator('#login_userId').fill('admin');
      await page.locator('#login_password').fill('123456');
      await page.locator('[aria-label="login-button"]').click();

      await expect(page).toHaveURL(`${BASE_URL}/home`);
    });
  });
});
