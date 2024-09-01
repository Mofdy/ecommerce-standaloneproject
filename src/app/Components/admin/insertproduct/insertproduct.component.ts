import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImgStyleDirective } from '../../Directives/img-style.directive';
import { IProduct } from '../../../Models/iproduct';
import { ProductService } from '../../../Services/product.service';
import { ICategory } from '../../../Models/i-category';
import { CategoryService } from '../../../Services/category.service';
@Component({
  selector: 'app-insertproduct',
  standalone: true,
  imports: [FormsModule, CommonModule, ImgStyleDirective,],
  templateUrl: './insertproduct.component.html',
  styleUrl: './insertproduct.component.scss'
})
export class InsertproductComponent implements OnInit {
  product!: IProduct;
  // categories: string[] = [];
  categories?: ICategory[] = [];
  isEditMode: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private CategoryService: CategoryService,
  ) { }

ngOnInit(){
  // this.route.paramMap.subscribe(params => {
  //   const productId = params.get('id');
  //   if (productId) {
  //     this.isEditMode = true;
  //     this.productService.getProductById(+productId).subscribe(product => this.product = product);
  //   }
  // });
  this.CategoryService.getAllCategories().subscribe(categories => this.categories = categories);
}

  onSubmit() {
    this.productService.addProduct(this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

}
