import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduct[];
  constructor() {
    this.products = [
      // {
      //   id: 1,
      //   name: "Product 1",
      //   price: 29.99,
      //   description: "Description for Product 1",
      //   imageUrl: "product1.png",
      //   categoryID: 101,
      //   storeId: 1,
      //   quantity: 0,
      //   details: { color: "red", size: "M" }
      // },
      // {
      //   id: 11,
      //   name: "Product 11",
      //   price: 29.99,
      //   description: "Description for Product 1",
      //   imageUrl: "product1.png",
      //   categoryID: 101,
      //   storeId: 1,
      //   quantity: 5,
      //   details: { color: "red", size: "M" }
      // },
      // {
      //   id: 12,
      //   name: "Product 12",
      //   price: 29.99,
      //   description: "Description for Product 1",
      //   imageUrl: "product1.png",
      //   categoryID: 101,
      //   storeId: 1,
      //   quantity: 4,
      //   details: { color: "red", size: "M" }
      // },
      // {
      //   id: 13,
      //   name: "Product 13",
      //   price: 29.99,
      //   description: "Description for Product 1",
      //   imageUrl: "product1.png",
      //   categoryID: 101,
      //   storeId: 1,
      //   quantity: 1,
      //   details: { color: "red", size: "M" }
      // },
      // {
      //   id: 2,
      //   name: "Product 2",
      //   price: 49.99,
      //   description: "Description for Product 2",
      //   imageUrl: "product2.png",
      //   categoryID: 102,
      //   storeId: 1,
      //   quantity: 1,
      //   details: { color: "blue", size: "L" }
      // },
      // {
      //   id: 3,
      //   name: "Product 3",
      //   price: 19.99,
      //   categoryID: 103,
      //   storeId: 2,
      //   quantity: 200,
      //   imageUrl: "product2.png",
      // },
      // {
      //   id: 33,
      //   name: "Product 33",
      //   price: 19.99,
      //   categoryID: 103,
      //   storeId: 2,
      //   quantity: 200,
      //   imageUrl: "product2.png",
      // },
      // {
      //   id: 34,
      //   name: "Product 34",
      //   price: 19.99,
      //   categoryID: 103,
      //   storeId: 2,
      //   quantity: 200,
      //   imageUrl: "product2.png",
      // },
    ];
  }
  getProducts(): IProduct[] {
    return this.products;
  }
  filteredProducts(Value: string): IProduct[] {
    return this.products.filter(product =>
      (Value ? product.name.toLowerCase().includes(Value.toLowerCase()) : true)
    );
  }
  getProductById(prdid: number): IProduct | undefined {
    return this.products.find(prd => prd.id == prdid)
  }

  getProductsIDs(): number[] {
    return this.products.map(prd => prd.id);
  }
}
