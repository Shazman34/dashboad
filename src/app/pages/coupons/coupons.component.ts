import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



export interface Coupon {
  code: string;
  description: string;
  status: string;
  used: string;
  expires: string;
}

const ELEMENT_DATA: Coupon[] = [
  { code: '126565', description: '$12.00 off', status: 'Active', used: '0 / Unlimited', expires: 'Never' },
];



@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {

  displayedColumns: string[] = ['code', 'status', 'used', 'expires'];
  dataSource = ELEMENT_DATA;
  totalCoupons = ELEMENT_DATA.length;
  pageSize = 10;
  constructor(public router: Router){

  }
  addCoupons(){
  // this.router.navigate(['service-info'],{ queryParams: serviceDetails });
  this.router.navigate(['dashboard/create-coupons']);


  }




  ngOnInit(): void {}

  onRowClicked(row: Coupon): void {
    console.log('Row clicked: ', row);
    // Handle row click event (e.g., navigate to coupon details page)
  }
}
