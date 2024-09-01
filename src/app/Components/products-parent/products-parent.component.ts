import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from "../products/products.component";
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products-parent',
  standalone: true,
  imports: [FormsModule, ProductsComponent],
  templateUrl: './products-parent.component.html',
  styleUrl: './products-parent.component.scss'
})
export class ProductsParentComponent {
  filtername:string='';
  cart:IProduct[]=[];
  addProductInCart(newPrd:IProduct){

    this.cart.push(newPrd);
  }
  
}
