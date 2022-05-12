import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { OrangeComponent } from './orange/orange.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsubComponent } from './products/productsub/productsub.component';
import { CounterComponent } from './products/counter/counter.component';
import { CounterchildComponent } from './products/counter/counterchild/counterchild.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrangechildComponent } from './orange/orangechild/orangechild.component';
import { BananaComponent } from './banana/banana.component';
import { BananachildComponent } from './banana/bananachild/bananachild.component';
import { AppleComponent } from './apple/apple.component';
import { ApplechildComponent } from './apple/applechild/applechild.component';
import { GrapesComponent } from './grapes/grapes.component';
import { GrapeschildComponent } from './grapes/grapeschild/grapeschild.component';
import { PinneappleComponent } from './pinneapple/pinneapple.component';
import { PinneapplechildComponent } from './pinneapple/pinneapplechild/pinneapplechild.component';
import { MangoComponent } from './mango/mango.component';
import { MangochildComponent } from './mango/mangochild/mangochild.component';
import { StrawberryComponent } from './strawberry/strawberry.component';
import { StrawberrychildComponent } from './strawberry/strawberrychild/strawberrychild.component';
import { GuavaComponent } from './guava/guava.component';
import { GuavachildComponent } from './guava/guavachild/guavachild.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ShopComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    OrangeComponent,

    ProductsComponent,
    ProductComponent,
    ProductsubComponent,
    CounterComponent,
    CounterchildComponent,
    SignupComponent,

    OrangechildComponent,
    BananaComponent,
    BananachildComponent,
    AppleComponent,
    ApplechildComponent,
    GrapesComponent,
    GrapeschildComponent,
    PinneappleComponent,
    PinneapplechildComponent,
    MangoComponent,
    MangochildComponent,
    StrawberryComponent,
    StrawberrychildComponent,
    GuavaComponent,
    GuavachildComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
