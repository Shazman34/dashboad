import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-create-new-customer',
  templateUrl: './create-new-customer.component.html',
  styleUrls: ['./create-new-customer.component.scss']
})
export class CreateNewCustomerComponent {
  
  isFocused= false;
  customerForm: FormGroup;



  constructor(private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: DialogData,private dialogRef: MatDialogRef<CreateNewCustomerComponent>) {
    this.customerForm = this._formBuilder.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      primaryAddress: ['', Validators.required],
      // aptUnit: ['']
      // primary_address:['']
    })

  }
  onSubmit() {
    if (this.customerForm.valid) {
      console.log("form value", this.customerForm.value)
      this.dialogRef.close(this.customerForm.value);
    }
  }
  closepopup(){
this.dialogRef.close()
  }
 
 
}
