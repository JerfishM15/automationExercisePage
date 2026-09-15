
export class ProductDetailPage {

    constructor(page) {
        this.page = page;
        this.productName = page.locator('.product-information h2');
        this.productCategory = page.locator('.product-information p').nth(0);
        this.productPrice = page.locator('.product-information span span');
        this.productAvailability = page.locator('.product-information p').nth(1);
        this.productCondition = page.locator('.product-information p').nth(2);
        this.productBrand = page.locator('.product-information p').nth(3);
    }

    isProductNameText() {
        return this.productName;
    }

    isProductCategoryText() {
        return this.productCategory;
    }

    isProductPriceText() {
        return this.productPrice;
    }

    isProductAvailabilityText() {
        return this.productAvailability;
    }

    isProductConditionText() {
        return this.productCondition;
    }

    isProductBrandText() {
        return this.productBrand;
    }

}
