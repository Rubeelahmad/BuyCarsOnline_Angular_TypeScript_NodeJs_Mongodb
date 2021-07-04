import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../../services/product/product.service';

import { Product } from '../../../models/product';

@Component({
    selector: 'app-products-details',
    templateUrl: './products-details.component.html',
    styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
    product: Product;

    constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {}

    ngOnInit(): void {
        this.product = JSON.parse(this.activatedRoute.snapshot.queryParamMap.get('product'));
        console.log(this.product);
    }

    addUnit() {
        ++this.product.quantity;
    }

    subtractUnit() {
        if (this.product.quantity < 2) {
            this.product.quantity = 1;
        } else {
            --this.product.quantity;
        }
    }

    addToCart() {
        this.productService.addProduct(this.product);
        this.router.navigate(['/cart']);
    }
}
