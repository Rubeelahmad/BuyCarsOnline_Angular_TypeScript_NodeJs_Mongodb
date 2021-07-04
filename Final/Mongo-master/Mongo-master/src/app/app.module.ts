import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { HomeDemoOneComponent } from './components/layout/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/layout/home-demo-two/home-demo-two.component';
import { AboutComponent } from './components/layout/about/about.component';
import { TeamComponent } from './components/layout/team/team.component';
import { AppointmentComponent } from './components/layout/appointment/appointment.component';
import { ProjectsComponent } from './components/layout/projects/projects.component';
import { ProjectsDetailsComponent } from './components/layout/projects-details/projects-details.component';
import { ServicesStyleOneComponent } from './components/layout/services-style-one/services-style-one.component';
import { ServicesStyleTwoComponent } from './components/layout/services-style-two/services-style-two.component';
import { ServicesDetailsComponent } from './components/layout/services-details/services-details.component';
import { BlogStyleOneComponent } from './components/layout/blog-style-one/blog-style-one.component';
import { BlogStyleTwoComponent } from './components/layout/blog-style-two/blog-style-two.component';
import { BlogDetailsComponent } from './components/layout/blog-details/blog-details.component';
import { ShopComponent } from './components/layout/shop/shop.component';
import { CartComponent } from './components/layout/cart/cart.component';
import { CheckoutComponent } from './components/layout/checkout/checkout.component';
import { ProductsDetailsComponent } from './components/layout/products-details/products-details.component';
import { ContactComponent } from './components/layout/contact/contact.component';
import { PricingComponent } from './components/layout/pricing/pricing.component';
import { FaqComponent } from './components/layout/faq/faq.component';
import { TestimonialsComponent } from './components/layout/testimonials/testimonials.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { SignInComponent } from './components/layout/sign-in/sign-in.component';
import { SignUpComponent } from './components/layout/sign-up/sign-up.component';
import { ComingSoonComponent } from './components/layout/coming-soon/coming-soon.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Services

import { LoginService } from './services/authentication/login/login.service';
import { LayoutComponent } from './components/layout/layout.component';
import { UserService } from './services/users/user.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        PreloaderComponent,
        HomeDemoOneComponent,
        HomeDemoTwoComponent,
        AboutComponent,
        TeamComponent,
        AppointmentComponent,
        ProjectsComponent,
        ProjectsDetailsComponent,
        ServicesStyleOneComponent,
        ServicesStyleTwoComponent,
        ServicesDetailsComponent,
        BlogStyleOneComponent,
        BlogStyleTwoComponent,
        BlogDetailsComponent,
        ShopComponent,
        CartComponent,
        CheckoutComponent,
        ProductsDetailsComponent,
        ContactComponent,
        PricingComponent,
        FaqComponent,
        TestimonialsComponent,
        NotFoundComponent,
        SignInComponent,
        SignUpComponent,
        ComingSoonComponent,
        LayoutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        HttpClientModule,
    ],
    providers: [LoginService, UserService],
    bootstrap: [AppComponent],
})
export class AppModule {}
