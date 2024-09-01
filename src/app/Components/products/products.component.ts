import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImgStyleDirective } from '../Directives/img-style.directive';
import { CalcCreditPipe } from '../Pipes/calc-credit.pipe';
import { ProductsService } from '../../Services/products.service';
import { Router } from '@angular/router';
import { ProductsWithApiService } from '../../Services/products-with-api.service';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule, ImgStyleDirective, CalcCreditPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  // @Output() products: IProduct[];
  cart: IProduct[] = [];
  inputValue: string = "";
  credit: string = "234142341234143";


  //products
  constructor(
    public productService: ProductsService,
     private router:Router,
     private productApi: ProductsWithApiService,
     private prdservice : ProductService,
    ) {
    // this.products = [
    //   {
    //     id: 1,
    //     name: "Product 1",
    //     price: 29.99,
    //     description: "Description for Product 1",
    //     imageUrl: "product1.png",
    //     categoryID: 101,
    //     storeId: 1,
    //     quantity: 0,
    //     details: { color: "red", size: "M" }
    //   }, {
    //     id: 11,
    //     name: "Product 11",
    //     price: 29.99,
    //     description: "Description for Product 1",
    //     imageUrl: "product1.png",
    //     categoryID: 101,
    //     storeId: 1,
    //     quantity: 5,
    //     details: { color: "red", size: "M" }
    //   }, {
    //     id: 12,
    //     name: "Product 12",
    //     price: 29.99,
    //     description: "Description for Product 1",
    //     imageUrl: "product1.png",
    //     categoryID: 101,
    //     storeId: 1,
    //     quantity: 4,
    //     details: { color: "red", size: "M" }
    //   }, {
    //     id: 13,
    //     name: "Product 13",
    //     price: 29.99,
    //     description: "Description for Product 1",
    //     imageUrl: "product1.png",
    //     categoryID: 101,
    //     storeId: 1,
    //     quantity: 1,
    //     details: { color: "red", size: "M" }
    //   },
    //   {
    //     id: 2,
    //     name: "Product 2",
    //     price: 49.99,
    //     description: "Description for Product 2",
    //     imageUrl: "product2.png",
    //     categoryID: 102,
    //     storeId: 1,
    //     quantity: 1,
    //     details: { color: "blue", size: "L" }
    //   },
    //   {
    //     id: 3,
    //     name: "Product 3",
    //     price: 19.99,
    //     categoryID: 103,
    //     storeId: 2,
    //     quantity: 200,
    //     imageUrl: "product2.png",
    //   },{
    //     id: 33,
    //     name: "Product 33",
    //     price: 19.99,
    //     categoryID: 103,
    //     storeId: 2,
    //     quantity: 200,
    //     imageUrl: "product2.png",
    //   },{
    //     id: 34,
    //     name: "Product 34",
    //     price: 19.99,
    //     categoryID: 103,
    //     storeId: 2,
    //     quantity: 200,
    //     imageUrl: "product2.png",
    //   },
    // ];
  }

  /////////////////////////////////////////////////////////////////////
  // selectedCategory: number = 101;
  // get filterCategory(): IProduct[] {
  //   return this.products.filter(product => product.categoryID === this.selectedCategory);
  // }
  productsAfterFilter: IProduct[] = [];
  ngOnInit() {
    // this.productsAfterFilter = this.productService.getProducts();

    this.productApi.getAllProducts().subscribe({
      next: (data) => {
        // console.log(data);

        this.productsAfterFilter = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  @Output() newPrdIncart = new EventEmitter<IProduct>();

  

  @Input() set filterByNameInChild(value: string) {

    this.productApi.getAllProducts().subscribe({
      next: (data) => {
        this.productsAfterFilter = data.filter((prd: IProduct) =>
          prd.name.toLowerCase().includes(value)
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
    // this.productsAfterFilter = this.productService.filteredProducts(value);
  }


  get filteredProducts(): IProduct[] {
    return this.productsAfterFilter;
  }

  // count total price 
  addToCart(product: IProduct) {
    if (product.quantity > 0) {
      this.newPrdIncart.emit(product);
      this.cart.push(product);
      product.quantity--;
    } else {
      alert(product.name + ' is not available. ')
      //       <div class="alert alert-danger d-flex align-items-center" role="alert">
      //   <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
      //   <div>
      //     An example danger alert with an icon
      //   </div>
      // </div>
    }
  }
  goToDetails(productId:number){
      this.router.navigate(['Product', productId]);
  }
  deleteProduct(productId: number): void {

    if (confirm('Are you sure you want to delete this product?')) {
      this.prdservice.deleteProduct(productId).subscribe(() => {
        this.productsAfterFilter = this.productsAfterFilter.filter(product => product.id !== productId);
      });
    }
  }
  editProduct(productId: number): void {
    this.router.navigate(['/admin/editproduct', productId]);
  }
}
