import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product';

import { ProductService } from '../../../services/product/product.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.getUpdatedList();
    }

    getUpdatedList() {
        this.products = this.productService.getProducts();
    }

    addUnit(product) {
        this.productService.addQuantity(product);
        this.getUpdatedList();
    }

    subtractUnit(product) {
        this.productService.subtractQuantity(product);
        this.getUpdatedList();
    }

    removeProduct(product) {
        this.productService.removeProduct(product);
        this.getUpdatedList();
    }
}
