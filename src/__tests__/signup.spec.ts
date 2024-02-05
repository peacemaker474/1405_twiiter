import { Page, expect, test } from '@playwright/test';

test.describe('회원가입 페이지 ', () => {
  const BASE_URL = 'http://localhost:3000';

  let page: Page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const context = await browser.newContext(contextOptions);
    page = await context.newPage();

    await page.goto(BASE_URL);
    await page.locator('[aria-label="signup-link"]').click();
  });

  test('회원가입 페이지에 진입한다.', async () => {
    await expect(page).toHaveURL(`${BASE_URL}/i/flow/signup`);
  });

  test('아무것도 입력하지 않고, 회원가입을 시도한다.', async () => {
    await page.getByRole('button', { name: '회원가입' }).click();
    await expect(page.locator('#error_userId')).toBeVisible();
    await expect(page.locator('#error_nickName')).toBeVisible();
    await expect(page.locator('#error_password')).toBeVisible();
  });

  test('비밀번호가 맞는지 확인한다.', async () => {
    await page.locator('#register_userId').fill('admin');
    await page.locator('#register_nickName').fill('운영진');
    await page.locator('#register_password').fill('123');
    await page.locator('#register_password2').fill('456');

    await page.getByRole('button', { name: '회원가입' }).click();
    await expect(page.locator('#error_password2')).toBeVisible();
  });
});
