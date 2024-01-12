import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { SingleProductComponent } from './single-product/single-product.component';

export const routes: Routes = [

    {path:"home",component:HomePageComponent},
    {path:"shop",component:ShopComponent},
    {path:"checkout",component:CheckoutComponent},
    {path:"cart",component:CartComponent},
    {path:"single-product",component:SingleProductComponent},
    {path:"**",component:HomePageComponent,pathMatch:'full'},
    {path:"shop/:id",component:SingleProductComponent}
];
