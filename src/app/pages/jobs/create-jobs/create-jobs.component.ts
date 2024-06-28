import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { CreateNewCustomerComponent } from '../create-new-customer/create-new-customer.component';
import { AddCustomServiceComponent } from '../add-custom-service/add-custom-service.component';
import { SelectPaymentMethodComponent } from '../select-payment-method/select-payment-method.component';
import { ReviewSummaryComponent } from '../review-summary/review-summary.component';

@Component({
  selector: 'app-create-jobs',
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateJobsComponent {
    @ViewChild('imageInput') imageInput: ElementRef;
    @ViewChild('attachmentInput') attachmentInput: ElementRef;
    @ViewChild(MatAccordion) accordion: MatAccordion;
    uploadedFiles: any[] = [];

  createJob(){

  }

   // 2 expand all
  
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


addPaymentMethod(){
    const dialogRef = this.dialog.open(SelectPaymentMethodComponent,{
        width:'500px'
    });

    dialogRef.afterClosed().subscribe((result) => {
        
        // console.log('Dialog result json:', JSON.stringify(result, null, 2));
    //    this.customerData= result
      console.log(this.customerData,`Dialog result: ${result}`);
    });
    
}
triggerImageUpload() {
    this.imageInput.nativeElement.click();
  }

  triggerAttachmentUpload() {
    this.attachmentInput.nativeElement.click();
  }

  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.uploadedFiles.push({ name: file.name, url: reader.result, type: file.type });
      };
      reader.readAsDataURL(file);
    }
  }

  onAttachmentSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadedFiles.push({ name: file.name, type: file.type });
    }
  }
  isImage(file: any): boolean {
    return file.type.startsWith('image/');
  }

  removeFile(file: any) {
    const index = this.uploadedFiles.indexOf(file);
    if (index >= 0) {
      this.uploadedFiles.splice(index, 1);
    }
  }

  reviewSummary(screen:string){
    const dialogRef = this.dialog.open(ReviewSummaryComponent,{
        width:'500px',
        data:screen
    });

    dialogRef.afterClosed().subscribe((result) => {
        
        // console.log('Dialog result json:', JSON.stringify(result, null, 2));
    //    this.customerData= result
      console.log(this.customerData,`Dialog result: ${result}`);
    });
  }
}
