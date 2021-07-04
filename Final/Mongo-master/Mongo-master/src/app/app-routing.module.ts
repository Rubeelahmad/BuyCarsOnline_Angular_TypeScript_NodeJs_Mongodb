import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/layout/about/about.component';
import { AppointmentComponent } from './components/layout/appointment/appointment.component';
import { BlogDetailsComponent } from './components/layout/blog-details/blog-details.component';
import { BlogStyleOneComponent } from './components/layout/blog-style-one/blog-style-one.component';
import { BlogStyleTwoComponent } from './components/layout/blog-style-two/blog-style-two.component';
import { CartComponent } from './components/layout/cart/cart.component';
import { CheckoutComponent } from './components/layout/checkout/checkout.component';
import { ComingSoonComponent } from './components/layout/coming-soon/coming-soon.component';
import { ContactComponent } from './components/layout/contact/contact.component';
import { FaqComponent } from './components/layout/faq/faq.component';
import { HomeDemoOneComponent } from './components/layout/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/layout/home-demo-two/home-demo-two.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { PricingComponent } from './components/layout/pricing/pricing.component';
import { ProductsDetailsComponent } from './components/layout/products-details/products-details.component';
import { ProjectsDetailsComponent } from './components/layout/projects-details/projects-details.component';
import { ProjectsComponent } from './components/layout/projects/projects.component';
import { ServicesDetailsComponent } from './components/layout/services-details/services-details.component';
import { ServicesStyleOneComponent } from './components/layout/services-style-one/services-style-one.component';
import { ServicesStyleTwoComponent } from './components/layout/services-style-two/services-style-two.component';
import { LayoutComponent } from '../app/components/layout/layout.component';
import { ShopComponent } from './components/layout/shop/shop.component';
import { SignInComponent } from './components/layout/sign-in/sign-in.component';
import { SignUpComponent } from './components/layout/sign-up/sign-up.component';
import { TeamComponent } from './components/layout/team/team.component';
import { TestimonialsComponent } from './components/layout/testimonials/testimonials.component';

import { AuthGuard } from '../app/guards/auth.guard';

const routes: Routes = [
    { path: '', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeDemoOneComponent, canActivate: [AuthGuard] },
            { path: 'home-demo-two', component: HomeDemoTwoComponent },
            { path: 'about', component: AboutComponent },
            { path: 'team', component: TeamComponent },
            { path: 'appointment', component: AppointmentComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'projects-details', component: ProjectsDetailsComponent },
            { path: 'pricing', component: PricingComponent },
            { path: 'faq', component: FaqComponent },
            { path: 'testimonials', component: TestimonialsComponent },
            { path: 'coming-soon', component: ComingSoonComponent },
            { path: 'services-1', component: ServicesStyleOneComponent },
            { path: 'services-2', component: ServicesStyleTwoComponent },
            { path: 'service-details', component: ServicesDetailsComponent },
            { path: 'blog-1', component: BlogStyleOneComponent },
            { path: 'blog-2', component: BlogStyleTwoComponent },
            { path: 'blog-details', component: BlogDetailsComponent },
            { path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
            { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
            { path: 'checkout', component: CheckoutComponent },
            { path: 'products-details', component: ProductsDetailsComponent },
            { path: 'contact', component: ContactComponent },
        ],
    },
    { path: '**', component: NotFoundComponent }, // This line will remain down from the whole pages component list

    // Here add new pages component
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard],
})
export class AppRoutingModule {}
