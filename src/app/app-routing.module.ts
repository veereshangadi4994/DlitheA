import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppleComponent } from './apple/apple.component';
import { BananaComponent } from './banana/banana.component';

import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { GrapesComponent } from './grapes/grapes.component';
import { GuavaComponent } from './guava/guava.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MangoComponent } from './mango/mango.component';
import { OrangeComponent } from './orange/orange.component';
import { PinneappleComponent } from './pinneapple/pinneapple.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';

import { ShopComponent } from './shop/shop.component';
import { SignupComponent } from './signup/signup.component';

import { StrawberryComponent } from './strawberry/strawberry.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Shop', component: ShopComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Orange', component: OrangeComponent },
  { path: 'banana', component: BananaComponent },
  { path: 'apple', component: AppleComponent },
  { path: 'grapes', component: GrapesComponent },
  { path: 'pinneapple', component: PinneappleComponent },
  { path: 'mango', component: MangoComponent },
  { path: 'strawberry', component: StrawberryComponent },
  { path: 'guava', component: GuavaComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'signup', component: SignupComponent },

  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
