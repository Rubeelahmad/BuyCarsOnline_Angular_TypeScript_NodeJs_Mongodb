import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product/product.service';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
    isDisplayCarSpareParts: boolean = true;
    isDisplayCarAccessories: boolean = false;
    isDisplayCarEmergencyAccessories: boolean = false;

    carParts: Product[]=[];

    constructor(private router: Router, private productService: ProductService) {}

    ngOnInit(): void {
        this.carParts = this.productService.getCarParts();
    }

    navigateToCart(product) {
        this.productService.addProduct(product);
        this.router.navigate(['/cart']);
    }

    navigateToProductDetails(product) {
        const queryParams: any = {};

        queryParams.product = JSON.stringify(product);

        const navigationExtras: NavigationExtras = {
            queryParams,
        };

        this.router.navigate(['/products-details'], navigationExtras);
    }

    displayImages(value: number) {
        if (value === 1) {
            this.isDisplayCarSpareParts = true;
            this.isDisplayCarAccessories = false;
            this.isDisplayCarEmergencyAccessories = false;
        } else if (value === 2) {
            this.isDisplayCarAccessories = true;
            this.isDisplayCarSpareParts = false;
            this.isDisplayCarEmergencyAccessories = false;
        } else {
            this.isDisplayCarEmergencyAccessories = true;
            this.isDisplayCarSpareParts = false;
            this.isDisplayCarAccessories = false;
        }
    }
}
