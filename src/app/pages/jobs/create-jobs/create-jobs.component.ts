import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { CreateNewCustomerComponent } from '../create-new-customer/create-new-customer.component';
import { AddCustomServiceComponent } from '../add-custom-service/add-custom-service.component';

@Component({
  selector: 'app-create-jobs',
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.scss']
})
export class CreateJobsComponent {
  
  createJob(){

  }

   // 2 expand all
   @ViewChild(MatAccordion) accordion: MatAccordion;
   isFocused = false;

   firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog) {}
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
   onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    setTimeout(() => { this.isFocused = false; }, 200); // delay to allow button click
  }
  customerData:any;
  addcustomer(){
    const dialogRef = this.dialog.open(CreateNewCustomerComponent);

    dialogRef.afterClosed().subscribe((result) => {
        // console.log('Dialog result json:', JSON.stringify(result, null, 2));
       this.customerData= result
      console.log(this.customerData,`Dialog result: ${result}`);
    });
  }

  addService(){
    const dialogRef = this.dialog.open(AddCustomServiceComponent);

    dialogRef.afterClosed().subscribe((result) => {
        // console.log('Dialog result json:', JSON.stringify(result, null, 2));
       this.customerData= result
      console.log(this.customerData,`Dialog result: ${result}`);
    });
  }
//   addService(){
//     AddCustomServiceComponent
//   }
}
