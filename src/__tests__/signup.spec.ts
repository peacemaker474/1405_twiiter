import { Page, expect, test } from '@playwright/test';

test.describe('회원가입 페이지 ', () => {
  const BASE_URL = 'http://localhost:3000';

  let page: Page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const context = await browser.newContext(contextOptions);
    page = await context.newPage();

    await page.goto(BASE_URL);
  });

  test('회원가입 페이지로 이동한다.', async () => {
    await page.locator('[aria-label="signup-link"]').click();
    await expect(page).toHaveURL(`${BASE_URL}/i/flow/signup`);
  });
});
