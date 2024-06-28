import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogData } from '../create-new-customer/create-new-customer.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-review-summary',
  templateUrl: './review-summary.component.html',
  styleUrls: ['./review-summary.component.scss']
})
export class ReviewSummaryComponent {
  isFocused= false;
  customServiceForm: FormGroup;
  hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i);
  label:any;

  discountType: string = 'dollar';
  discountValue: number | null = null;

  chargeTax: boolean = false;
  taxName: number | null = null;
  taxRate: string = '';
  constructor(private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<ReviewSummaryComponent>) {
    this.customServiceForm = this._formBuilder.group({
      serviceName: ['', Validators.required],
      price: ['', Validators.required],
      duration: ['', [Validators.required, Validators.email]],
      minutes: ['', Validators.required],
      // aptUnit: ['']
      // primary_address:['']
    })
this.label = this.data;
console.log("label",this.label,"this.data",this.data)
  }
  onSubmit() {
    if (this.customServiceForm.valid) {
      console.log("form value", this.customServiceForm.value)
      this.dialogRef.close(this.customServiceForm.value);
    }
  }
  closepopup(){
this.dialogRef.close()
  }
  onSave() {
    // Logic to save the discount value
    console.log('Discount Type:', this.discountType);
    console.log('Discount Value:', this.discountValue);
    this.dialogRef.close();
  }
  addDiscount(){
    this.discountValue= null;
  }

  onSaveTax() {
    // Logic to save the tax options
    console.log('Charge Tax:', this.chargeTax);
    console.log('Price:', this.taxName);
    console.log('Tax Label:', this.taxRate);
    this.dialogRef.close();
  }
}
