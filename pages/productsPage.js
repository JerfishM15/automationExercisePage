
export class ProductsPage {

    constructor(page) {
        this.page = page;
        this.pageTitle = page.locator('.features_items > .title.text-center');
        this.productWrappers = page.locator('.product-image-wrapper');
        this.viewProductLinks = page.locator('a[href^="/product_details"]');
        this.searchInput = page.locator('#search_product');
        this.searchBtn = page.locator('#submit_search');
    }

    async visit() {
        await this.page.goto('/products');
    }

    isPageTitle() {
        return this.pageTitle;
    }

    isProductsListVisible() {
        return this.productWrappers.first();
    }

    async clickViewProduct(index = 0) {
        await this.viewProductLinks.nth(index).click();
    }

    async searchProduct(productName) {
        await this.searchInput.fill(productName);
        await this.searchBtn.click();
    }

}
