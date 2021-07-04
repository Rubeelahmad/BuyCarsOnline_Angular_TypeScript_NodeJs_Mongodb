import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product';

import { ProductService } from '../../../services/product/product.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.getUpdatedList();
    }

    getUpdatedList() {
        this.products = this.productService.getProducts();
    }
}
