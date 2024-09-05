import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  const verifyCategory = async (
    page: any,
    category: string,
    headingText: any
  ): Promise<void> => {
    await page.getByRole("navigation").getByText(category).click();
    await page.waitForLoadState();
    const articles = await page.$$('img[alt*="cover"]');
    await expect(articles.length).toBe(10);
    await expect(page.getByText(headingText)).toHaveClass(/font-bold/);
  };

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

  test("should highlight the trending category as active ", async ({
    page,
  }) => {
    const navItem = await page.$("nav>>text=Trending");
    const isCategoryActive = navItem?.evaluate((navItem) =>
      navItem.classList.contains("text-yellow-700")
    );
    await expect(isCategoryActive).toBeTruthy();
    await expect(page.getByText(/Featured trending/)).toHaveClass(/font-bold/);
  });

  test("should display the article  related to Health", async ({ page }) => {
    await verifyCategory(page, "Health", /Featured news in health/);
  });
  test("should display the article  related to Business", async ({ page }) => {
    await verifyCategory(page, "Business", /Featured news in business/);
  });
  test("should display the article  related to Sports", async ({ page }) => {
    await verifyCategory(page, "Sports", /Featured news in sports/);
  });
  test("should display the article related to Technology", async ({ page }) => {
    await verifyCategory(page, "Technology", /Featured news in technology/);
  });
});
