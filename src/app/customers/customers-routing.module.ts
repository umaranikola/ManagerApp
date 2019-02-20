// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { CustomerComponent } from './customer.component';
// import { CustomerGridComponent } from './customer-grid.component';

// const routes: Routes = [
//   {path:'', component:CustomerComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class CustomersRoutingModule {
//   static component: [CustomerComponent, CustomerGridComponent];
//  }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerGridComponent } from './customer-grid.component';
import { CustomerViewComponent } from './customer-view.component';


const routes: Routes = [
  {path:'',component:CustomerComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { 
  static component = [CustomerComponent, CustomerGridComponent,CustomerViewComponent];
}