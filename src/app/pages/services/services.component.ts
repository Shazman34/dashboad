import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { AddServiceComponent } from './add-service/add-service.component';
import { MatDialog } from '@angular/material/dialog';
import { ServiceDetailedInfoComponent } from './service-detailed-info/service-detailed-info.component';
import { Router } from '@angular/router';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  constructor(public dialog: MatDialog,public router: Router){}
  services = [
    { name: 'dsafadsfsdf fasdfa', price: '$', status: 'Bookable' },
    { name: 'new service', price: '$', status: 'Bookable' },
    { name: 'new service 2', price: '$', status: 'Bookable' },
    { name: 'new service 3', price: '$', status: 'Bookable' },
  ];
  drop(event: CdkDragDrop<{ name: string; price: string; status: string }[]>) {
    moveItemInArray(this.services, event.previousIndex, event.currentIndex);
  }


  addService(): void {
  
    const dialogRef = this.dialog.open(AddServiceComponent, {
      width:'500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.services.push({ name: result, price: '$', status: 'Bookable' });
      }
    });
  }
  serviceDetails(serviceDetails:any): void {
  // this.router.navigate[('service-info')]

  // this.router.navigate(['service-info'], );
  this.router.navigate(['service-info'],{ queryParams: serviceDetails });

    
  }
}
