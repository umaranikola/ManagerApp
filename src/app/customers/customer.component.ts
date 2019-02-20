// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-customer',
//   templateUrl: './customer.component.html',
//   styleUrls: ['./customer.component.css']
// })
// export class CustomerComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  // cardViewStatus:boolean;
  // gridViewStatus:boolean;
  // loadCardView(){
  //   this.cardViewStatus = true;
  //   this.gridViewStatus = false;
  // }
  // loadGridView(){
  //   this.cardViewStatus = false;
  //   this.gridViewStatus = true;
  // }

  cardViewStatus:boolean;
  gridViewStatus:boolean;
  loadCustomerCardView(){
    this.cardViewStatus=true;
    this.gridViewStatus=false;
  }
  loadCustomerGridView(){
    this.gridViewStatus=true;
    this.cardViewStatus=false;
  }

  constructor() { }

  ngOnInit() {
  }

}
