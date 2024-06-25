import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';


@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class DeletePopupComponent implements OnInit {
data_info:any;
  constructor(public dialogRef: MatDialogRef<DeletePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) {}
ngOnInit(): void {
  this.data_info= this.data;
  console.log("info ",this.data_info,"dataaaa",this.data)
}
  delete(val:any){
    this.dialogRef.close(val);
  }
}
