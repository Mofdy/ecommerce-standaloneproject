import { Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { UserTemplateFormComponent } from './Components/User/user-template-form/user-template-form.component';
import { InsertproductComponent } from './Components/admin/insertproduct/insertproduct.component';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';
import { userguardGuard } from './Guards/userguard.guard';



export const routes: Routes = [
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent,title:"Home page"},
    {path:'Products',component:ProductsComponent,title:"Products page", canActivate:[userguardGuard]},
    {path:'ProductsParent',component:ProductsParentComponent, title:"Products page" ,canActivate:[userguardGuard]},
    {path:'Product/:ProductId',component:ProductDetailsComponent, title:"Products Details" ,canActivate:[userguardGuard]},
    {path:'AboutUs',component:AboutUsComponent, title:"About Us"},
    {path:'UserTemplateForm',component:UserTemplateFormComponent, title:"Signup Form"},
    {path:'admin/insertproduct',component:InsertproductComponent, title:"Add Product" ,canActivate:[userguardGuard]},
    {path:'UserLogin',component:UserAuthComponent,title:"Login Page"},
    {path:'UserLogout',component:UserAuthComponent,title:"Logout Page"},


    // not found page, wildcard path
    {path:"**",component:NotfoundComponent},
];
