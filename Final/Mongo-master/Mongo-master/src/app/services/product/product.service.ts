import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private productsQuantity = new BehaviorSubject<number>(null);

    products: Product[];

    public carParts:Product[]=[];
    //= [
    //     {
    //         id: 1,
    //         name: 'Steering Wheel Cover',
    //         beforePrice: 35.0,
    //         afterPrice: 30.0,
    //         imgRef: 'assets/img/products/products-img1.jpg',
    //         quantity: 1,
    //     },

    //     {
    //         id: 2,
    //         name: '200cm LED Car Interior',
    //         beforePrice: 55.0,
    //         afterPrice: 50.0,
    //         imgRef: 'assets/img/products/products-img2.jpg',
    //         quantity: 1,
    //     },

    //     {
    //         id: 3,
    //         name: 'Carbon Fiber Style Multimedia Panel',
    //         beforePrice: 65.0,
    //         afterPrice: 60.0,
    //         imgRef: 'assets/img/products/products-img3.jpg',
    //         quantity: 1,
    //     },

    //     {
    //         id: 4,
    //         name: 'Wheel - BMW (36-10-8-043-670)',
    //         beforePrice: 50.0,
    //         afterPrice: 45.0,
    //         imgRef: 'assets/img/products/products-img4.jpg',
    //         quantity: 1,
    //     },

    //     {
    //         id: 5,
    //         name: 'Carbon Fiber Style Multimedia Panel',
    //         beforePrice: 25.0,
    //         afterPrice: 20.0,
    //         imgRef: 'assets/img/products/products-img5.jpg',
    //         quantity: 1,
    //     },

    //     {
    //         id: 6,
    //         name: 'BMW 650i 2016 F10 F12 F13 4.4 TWIN TURBO V8 ENGINE',
    //         beforePrice: 100.0,
    //         afterPrice: 85.0,
    //         imgRef: 'assets/img/products/products-img6.jpg',
    //         quantity: 1,
    //     },

    //     {
    //         id: 7,
    //         name: 'Original BMW AGM-battery 60 AH',
    //         beforePrice: 120.0,
    //         afterPrice: 105.0,
    //         imgRef: 'assets/img/products/products-img7.jpg',
    //         quantity: 1,
    //     },

    //     {
    //         id: 8,
    //         name: '4x Chrome Crown Car Tire Air Valve Stem Screw Caps',
    //         beforePrice: 100.0,
    //         afterPrice: 35.0,
    //         imgRef: 'assets/img/products/products-img8.jpg',
    //         quantity: 1,
    //     },

    //     {
    //         id: 9,
    //         name: 'Drink Cup Holder',
    //         beforePrice: 45.0,
    //         afterPrice: 30.0,
    //         imgRef: 'assets/img/products/products-img9.jpg',
    //         quantity: 1,
    //     },
    // ];

    constructor(private http:HttpClient) {
        this.getCarPartsFromBackend().subscribe(res=>{
            if(res && res.data){
                console.log(res.data);
                this.setCarParts(res.data);
            }
        });
    }

    // set carParts 
    setCarParts(products:Product[]):void{
        this.carParts=products;
    }

    getCarParts():Product[]{
        if(this.carParts && this.carParts.length){
            return this.carParts;
        }else{
            this.getCarPartsFromBackend().subscribe(res=>{
                if(res && res.data){
                    console.log(res.data);
                    this.setCarParts(res.data);
                }
            })
        }
        
    }

    getProduct(product: Product) {}


    getProducts():Product[] {
        this.products = JSON.parse(localStorage.getItem('products'));

        if (!this.products) {
            this.products = [];
        }
        return this.products;
        // The Products will be taken from the backend 
        
    }

    getCarPartsFromBackend():Observable<any> {
        return this.http.get<any>(environment.apiUrl+`/product/list`);
    }

    addProduct(product: Product) {
        
        let isAlreadyAdded = this.products.find((currProduct) => currProduct._id === product._id);
        console.log(product);
        if (isAlreadyAdded) {
            this.products.find((currProduct) => currProduct._id === product._id).quantity += product.quantity;
        } else {
            this.products.push(product);
        }
        this.updateLocalStorage();
    }

    removeProduct(product: Product) {
        const productToBeDeleted = this.products.findIndex((currProduct) => currProduct._id === product._id);

        if (productToBeDeleted > -1) {
            this.products.splice(productToBeDeleted, 1);
        }

        this.updateLocalStorage();
    }

    addQuantity(product: Product) {
        this.products.find((currProduct) => currProduct._id === product._id).quantity++;
        this.updateLocalStorage();
    }

    subtractQuantity(product: Product) {
        if (product.quantity <= 1) {
            product.quantity = 1;
        } else {
            this.products.find((currProduct) => currProduct._id === product._id).quantity--;
        }

        this.updateLocalStorage();
    }

    updateLocalStorage() {
        localStorage.setItem('products', JSON.stringify(this.products));
        this.setListQuantity();
    }

    setListQuantity() {
        this.productsQuantity.next(this.products.length);
    }

    getListQuantity() {
        return this.productsQuantity.asObservable();
    }
}
