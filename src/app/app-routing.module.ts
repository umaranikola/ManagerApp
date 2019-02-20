
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const route:Routes =[
    {path:'' ,redirectTo:'/customers' ,pathMatch:'full' },
    {path:'customers',loadChildren:"./customers/customers.module#CustomersModule"},
    {path:'orders',loadChildren:"./orders/orders.module#OrdersModule"},
    {path:'**', component:PageNotFoundComponent}
    
   
];

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})
export class AppRoutingModule{
    
}