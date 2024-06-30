import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountComponent } from './setting-card-details/account/account.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SettingsComponent {

  constructor( private router:Router) {}
  accountCard(screen:any){


    this.router.navigate(['dashboard/setting-account'])
// debugger
//     console.log("account details--->",screen)
//     const dialogRef = this.dialog.open(AccountComponent, {
//       width:'600px',
//     });
//     dialogRef.afterClosed().subscribe((result) => {
//       console.log("reuslt on closing ",result)
    

//     })
  }
}
