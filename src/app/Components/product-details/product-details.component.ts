import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { IProduct } from '../../Models/iproduct';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsWithApiService } from '../../Services/products-with-api.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ FormsModule,
    CommonModule,],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  prdID: number = 0;
  product: IProduct | undefined = undefined;
  IDsList: number[] = [];
  currentIndex: number = 0;
  searchResult:IProduct[]=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    // private productservice: ProductsService,  
    private router: Router,
    private location: Location,
    private productApi: ProductsWithApiService
  ) {

  }
  ngOnInit(): void {
    //! Snapshot
    // this.prdID = (this.activatedRoute.snapshot.paramMap.get('ProductId')) ? Number(this.activatedRoute.snapshot.paramMap.get('ProductId')) : 0;

    // if (!this.prdID) {
    //   this.router.navigateByUrl('/Products');
    //   return;
    // }
    // else this.product = this.productservice.getProductById(this.prdID);

    //! Observable
    // this.IDsList = this.productservice.getProductsIDs();
    this.activatedRoute.paramMap.subscribe((params) => {
      this.prdID = Number(params.get('ProductId')) || 0;

      // With ProductsAPi service
      this.productApi.getProductByID(this.prdID).subscribe({
        next: (prd) => {
          this.product = prd;
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
    this.productApi.getProductIds().subscribe({
      next: (IDs) => {
        this.IDsList = IDs;
      },
      error: (err) => {
        console.log(err);
      },
    });

    
  }
  prevFunc() {
    
    this.currentIndex = this.IDsList.indexOf(this.prdID);
    this.router.navigate(['Product', this.IDsList[--this.currentIndex]]);
  }
  nextFunc() {

    this.currentIndex = this.IDsList.indexOf(this.prdID);
    this.router.navigate(['Product', this.IDsList[++this.currentIndex]]);

  }
  goBackFunc(){
    this.location.back();
  }
  searchFunc(categoryID: number|string){
    this.productApi.searchPrdWithCategoryID(Number(categoryID)).subscribe({
      next:(data)=>{


        this.searchResult=data;

      },
      error:(error)=>{
        console.log(error);

      }
    })
  }
}
