import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { CheckoutComponent } from './components/checkout/checkout.component'

const routes: Routes = [
  {path: "store",
   component: StoreComponent,
   children: [
    {path: "checkout", component: CheckoutComponent}
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
