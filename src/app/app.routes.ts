import { Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { UserTemplateFormComponent } from './Components/User/user-template-form/user-template-form.component';
import { InsertproductComponent } from './Components/admin/insertproduct/insertproduct.component';



export const routes: Routes = [
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent,title:"Home page"},
    {path:'Products',component:ProductsComponent,title:"Products page"},
    {path:'ProductsParent',component:ProductsParentComponent, title:"Products page"},
    {path:'Product/:ProductId',component:ProductDetailsComponent, title:"Products Details"},
    {path:'AboutUs',component:AboutUsComponent, title:"About Us"},
    {path:'UserTemplateForm',component:UserTemplateFormComponent, title:"Signup Form"},
    {path:'admin/insertproduct',component:InsertproductComponent, title:"Add Product"},


    // not found page, wildcard path
    {path:"**",component:NotfoundComponent},
];
