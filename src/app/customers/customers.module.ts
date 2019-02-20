// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { CustomersRoutingModule } from './customers-routing.module';
// import { CustomerComponent } from './customer.component';
// import { CustomerGridComponent } from './customer-grid.component';
// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: [CustomersRoutingModule,CustomerComponent, CustomerGridComponent]
// })
// export class CustomersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';




@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersRoutingModule.component]
})
export class CustomersModule { }
