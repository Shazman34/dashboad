import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent {
  serviceName: string = '';

  // constructor(public dialogRef: MatDialogRef<AddServiceComponent>) { }

  // onCreate(): void {
  //   console.log('Service created:', this.serviceName);
  //   this.dialogRef.close(this.serviceName);
  // }
   
  isFocused= false;
  customerForm: FormGroup;
local_data:any;


  constructor(private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: DialogData,private dialogRef: MatDialogRef<AddServiceComponent>) {
    this.customerForm = this._formBuilder.group({
      name: ['', Validators.required],

    })

  }

  ngOnInit(): void {
    this.local_data =   this.local_data = { ...this.data };
    this.updateCustomer()
    console.log("local data ",this.local_data)

  }
  updateCustomer() {
    this.customerForm.patchValue({
      name: this.local_data.name,

    });
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
