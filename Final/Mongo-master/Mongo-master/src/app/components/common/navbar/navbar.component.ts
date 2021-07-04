import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product';

import { ProductService } from '../../../services/product/product.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    products: Product[];
    constructor(private productService: ProductService) {}

    ngOnInit(): void {

        this.productService.getListQuantity().subscribe((data) => {
            this.getUpdatedList();
        });
    }

    onSignOut() {
        localStorage.setItem('isUserLoggedIn', JSON.stringify(false));
    }

    getUpdatedList() {
      this.products = this.productService.getProducts();
    }
}
