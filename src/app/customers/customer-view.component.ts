import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  customerView: Array<any>;
  constructor() { }

  ngOnInit() {
    this.customerView=[
      {
        id:1,
        name:"VarunReddy",
        location:"Hyderbad",
        state:"Telangana",
        imgPath:"assets/images/male2.png"
      },
      {
        id:2,
        name:"Uma Rani",
        location:"Hyderbad",
        state:"Telangana",
        imgPath:"assets/images/male2.png"
      },
      {
        id:3,
        name:"Harish",
        location:"Hyderbad",
        state:"TS",
        imgPath:"assets/images/male2.png"
      },
      {
        id:4,
        name:"Emily",
        location:"St. Chruch",
        state:"California",
        imgPath:"assets/images/male2.png"
      },
      {
        id:5,
        name:"Andrew",
        location:"Johnson West street",
        state:"NewYork",
        imgPath:"assets/images/male2.png"
      },
      {
        id:6,
        name:"Harish",
        location:"Hyderbad",
        state:"TS",
        imgPath:"assets/images/male2.png"
      }
    ];
  }

}
