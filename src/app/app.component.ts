import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { ProductsComponent } from "./Components/products/products.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { ProductsParentComponent } from "./Components/products-parent/products-parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductsComponent, FooterComponent, ProductsParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-standaloneproject';
}
