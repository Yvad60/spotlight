import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.route(
      "https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=263c8404961d4cd79aab25224a547473",
      (route) => {
        route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            status: "ok",
            totalResults: 37,
            articles: Array.from({ length: 10 }, (_, i) => ({
              source: { id: `source-${i}`, name: `Source ${i}` },
              author: `Author ${i}`,
              title: `Sample Article Title ${i}`,
              url: "https://news.google.com/rss/articles/CBMihwFBVV95cUxPZ2FyV3g3Znp3ZkpDbnBJSEQ3WHUyVXZwbGJ5RWZMXzN0YXp2NHFWMTRjRHJyZnhzM2FhUEFCTk5qbWlhMnBRdDJVSTJRYURFUGZZbm9Nd05FRTlvSkd5cGY0Q2c2OWVodVhqQnF1QXVYWGlMWHE1TVFfVXRaZl9lcGNpQnhOX1HSAX5BVV95cUxNTVlCalJwbDdXdVBfLTg4MkxJRURNYzZBNjZyQUxYVkJqYUF5MGFmZ0Y3QVJ5NE5CaV9oTk1DUGc4MU43bEFsWU1pWmV3bENfNDRadVMxOW1jdm1ZYUhCOGxZZVZGcUVCSWZuMlNBNlZXNVlvU0hVeHpyQlBCSGc?oc=5",
              publishedAt: new Date().toISOString(),
            })),
          }),
        });
      }
    );
    await page.goto("/");
  });

  test("should highlight the trending category as active", async ({ page }) => {
    const navItem = await page.$("nav>>text=Trending");
    const isCategoryActive = await navItem?.evaluate((element) => {
      return element.classList.contains("text-yellow-700");
    });
    await expect(isCategoryActive).toBeTruthy();
  });

  test("should display 10 articles", async ({ page }) => {
    const articles = await page.$$('img[alt*="cover"]');
    await expect(articles.length).toBe(10);
  });

  // test("should be able to navigate to one full article", async ({ page }) => {
  //   const articles = await page.$$('img[alt*="cover"]');
  //   const firstArticle = articles[0];
  //     await firstArticle?.click();
  //     await expect(page).toHaveURL(/article/);

  // });
});
