import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../create-new-customer/create-new-customer.component';

@Component({
  selector: 'app-select-payment-method',
  templateUrl: './select-payment-method.component.html',
  styleUrls: ['./select-payment-method.component.scss']
})
export class SelectPaymentMethodComponent implements OnInit {
  typesOfShoes: string[] = ['Check', 'Cash'];

constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private dialogRef: MatDialogRef<SelectPaymentMethodComponent>){

}

ngOnInit(): void {
  
}
// closepopup(){
//   this.dialogRef.close()
//     }

    addNewCard(){

    }
}
