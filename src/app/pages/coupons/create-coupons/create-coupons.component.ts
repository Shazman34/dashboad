import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-coupons',
  templateUrl: './create-coupons.component.html',
  styleUrls: ['./create-coupons.component.scss']
})
export class CreateCouponsComponent implements OnInit {
  limitUsage: boolean = true;
  usageLimit: number | null = 0;
  combineWithRecurring: boolean = false;
  recurringDiscount: string = 'all';

  foods: any[] = [
    { value: 'steak-0', viewValue: 'One' },
    { value: 'pizza-1', viewValue: 'Two' },
    { value: 'tacos-2', viewValue: 'Three' },
    { value: 'tacos-3', viewValue: 'Four' },
  ];
  services = [
    { name: 'Service 1', selected: false },
    { name: 'Service 2', selected: false },
    { name: 'Service 3', selected: false },
    { name: 'Service 4', selected: false },
  ];
  discountTypes:any[]=[
    { value: 'Fixed amount discount', viewValue: 'Fixed amount discount' },
    { value: 'Percentage discount', viewValue: 'Percentage discount' },

  ]
  selectedDiscountType:string='Fixed amount discount';

  selectedFood = this.discountTypes[1].value;
  constructor(public router: Router){

  }
ngOnInit(): void {
  this.autoGenerateCode();
  if (!this.doesntExpire) {
    this.setExpirationDateToToday();
  }
}
goBack(){
  this.router.navigate(['coupons'])
}

couponCode: string = '';
discountType: string = 'fixed';
discountAmount: number | null = null;
appliesTo: string = 'all';
doesntExpire: boolean = true;
expirationDate: Date | null = null;

autoGenerateCode() {
  this.couponCode = 'AUTO-' + Math.random().toString(36).substring(2, 10).toUpperCase();
}

createCoupon() {
  // Logic to create the coupon
  console.log('Coupon Code:', this.couponCode);
  console.log('Discount Type:', this.discountType);
  console.log('Discount Amount:', this.discountAmount);
  console.log('Applies To:', this.appliesTo);
  console.log('Doesn\'t Expire:', this.doesntExpire);
  console.log('Expiration Date:', this.expirationDate);
}

toggleExpiration(): void {
  if (!this.doesntExpire) {
    this.setExpirationDateToToday();
  } else {
    this.expirationDate = null;
  }
}

setExpirationDateToToday(): void {
  this.expirationDate = new Date();
  console.log("expiration date",this.expirationDate)
}

toggleLimitUsage(): void {
  if (!this.limitUsage) {
    this.usageLimit = 0;
  }
}
}
