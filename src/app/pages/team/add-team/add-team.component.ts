import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  fullName: string = '';
  email: string = '';
  mobilePhoneNumber: string = '';
  startLocation: string = '';
  serviceProvider: boolean = false;
  permissions = {
    editAvailability: false,
    viewContactInfo: false,
    markJobs: false,
    editJobDetails: false,
    viewJobPrice: false,
    processPayments: false,
    rescheduleJobs: false
  };
  
  constructor(public dialogRef: MatDialogRef<AddTeamComponent>,private _formBuilder: FormBuilder) {}
 //   reactive form
 @ViewChild(MatAccordion) accordion: MatAccordion;

 toppings = this._formBuilder.group({
  pepperoni: false,
  extracheese: false,
  mushroom: false,
});
ngOnInit(): void {
  
}
foods: Food[] = [
  { value: 'steak-0', viewValue: 'One' },
  { value: 'pizza-1', viewValue: 'Two' },
  { value: 'tacos-2', viewValue: 'Three' },
  { value: 'tacos-3', viewValue: 'Four' },
];

selectedFood = this.foods[2].value;
// 1 basic
panelOpenState = false;

// 3 accordian
step = 0;

setStep(index: number) {
  this.step = index;
}

nextStep() {
  this.step++;
}

prevStep() {
  this.step--;
}
}
