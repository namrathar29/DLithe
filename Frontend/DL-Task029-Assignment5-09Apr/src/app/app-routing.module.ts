import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProductsComponent } from './products/products.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  // adding path and component for routing
  { path: 'login-form', component: LoginFormComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'registration-form', component: RegistrationFormComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'landing-page', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
