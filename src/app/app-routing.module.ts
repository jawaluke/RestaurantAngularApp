import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { AboutUsComponent } from './components/about-us/about-us.component'
import { NotFoundComponent } from './components/error-pages/not-found/not-found.component'
import { LoginGuard } from './guards/login-guard/login.guard'

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomePageComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "login", component: LoginPageComponent},
  {path: "user", loadChildren: () => import("./modules/user/user.module").then((m) => m.UserModule), canActivate: [LoginGuard]},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
