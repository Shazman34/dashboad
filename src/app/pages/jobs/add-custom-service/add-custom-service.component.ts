import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-add-custom-service',
  templateUrl: './add-custom-service.component.html',
  styleUrls: ['./add-custom-service.component.scss']
})
export class AddCustomServiceComponent {
  
  isFocused= false;
  customServiceForm: FormGroup;
  hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i);


  constructor(private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: DialogData,private dialogRef: MatDialogRef<AddCustomServiceComponent>) {
    this.customServiceForm = this._formBuilder.group({
      serviceName: ['', Validators.required],
      price: ['', Validators.required],
      duration: ['', [Validators.required, Validators.email]],
      minutes: ['', Validators.required],
      // aptUnit: ['']
      // primary_address:['']
    })

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
 
 
}
