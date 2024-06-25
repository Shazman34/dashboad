import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
export interface Contact {
  contactimg: string;
  contactname: string;
  contactpost: string;
  contactadd: string;
  contactno: string;
  contactinstagram: string;
  contactlinkedin: string;
  contactfacebook: string;
}

export interface ContactData {
  closeResult: string;
  contacts: Contact[];
  searchText: any;
  txtContactname: string;
  txtContactPost: string;
  txtContactadd: string;
  txtContactno: string;
  txtContactinstagram: string;
  txtContactlinkedin: string;
  txtContactfacebook: string;
}

export const contactList: Contact[] = [
  {
    contactimg: 'assets/images/profile/user-2.jpg',
    contactname: 'Johnathan Doe',
    contactpost: 'Web Designer',
    contactadd: '795 Folsom Ave, Suite 600 San Francisco, NY, 10003',
    contactno: '(123) 456-7890',
    contactinstagram: '254',
    contactlinkedin: '54',
    contactfacebook: '154',
  },
  // {
  //   contactimg: 'assets/images/profile/user-8.jpg',
  //   contactname: 'Oliver Smith',
  //   contactpost: 'Theme Designer',
  //   contactadd: '55 E 11th St #1OTH, Suite 600 New York, NY, 10003 ',
  //   contactno: '(212) 228-8403',
  //   contactinstagram: '150',
  //   contactlinkedin: '14',
  //   contactfacebook: '165',
  // },
  // {
  //   contactimg: 'assets/images/profile/user-4.jpg',
  //   contactname: 'George Johnson',
  //   contactpost: 'Front End Developer',
  //   contactadd: '36 W 138th St, San Francisco New York, NY, 10037',
  //   contactno: '(212) 234-0783',
  //   contactinstagram: '300',
  //   contactlinkedin: '65',
  //   contactfacebook: '130',
  // },
  // {
  //   contactimg: 'assets/images/profile/user-5.jpg',
  //   contactname: 'Harry Potter',
  //   contactpost: 'Hacker',
  //   contactadd: '2289 5th Ave, Suite 600 San Francisco New York, NY, 10037',
  //   contactno: '(212) 456-8403',
  //   contactinstagram: '220',
  //   contactlinkedin: '38',
  //   contactfacebook: '178',
  // },
  // {
  //   contactimg: 'assets/images/profile/user-6.jpg',
  //   contactname: 'Jack Williams',
  //   contactpost: 'Back End Developer',
  //   contactadd: '425 5th Ave, Suite 600 Francisco New York, NY, 10016',
  //   contactno: '(154) 456-8745',
  //   contactinstagram: '650',
  //   contactlinkedin: '150',
  //   contactfacebook: '195',
  // },
  // {
  //   contactimg: 'assets/images/profile/user-7.jpg',
  //   contactname: 'Jacob Jones',
  //   contactpost: 'Graphics Designer',
  //   contactadd: '17 Stuyvesant Walk, Suite 600 New York, NY, 10009',
  //   contactno: '(150) 784-7890',
  //   contactinstagram: '151',
  //   contactlinkedin: '29',
  //   contactfacebook: '160',
  // },
];
export const courseList: any[] = [
  {
    Id: 1,
    courseType: 'rgb(3, 124, 255) !important;',
    courseFramework: 'Jobs',
    Time: 'Create Job',
    courseName: 'No upcoming jobs are scheduled for this customer',
    Update: 'Updated 21 Jan 2020',
  }
]

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
  providers: [DatePipe]
})
export class CustomerInfoComponent implements OnInit {

  closeResult = '';
  contacts: Contact[] = [];
  courseList:any

  searchText: any;
  txtContactname = '';
  txtContactPost = '';
  txtContactadd = '';
  txtContactno = '';
  txtContactinstagram = '';
  txtContactlinkedin = '';
  txtContactfacebook = '';

  constructor(
    public dialog: MatDialog,
    public router: Router
    // private contactService: ContactService
  ) {
    // this.contacts = this.contactService.getContacts();
    //console.log(this.contacts);
    this.contacts = contactList;
    this.courseList = courseList
  }

  // openDialog(action: string, obj: any): void {
  //   obj.action = action;
  //   const dialogRef = this.dialog.open(AppContactDialogContentComponent, {
  //     data: obj,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result.event === 'Add') {
  //       this.addContact(result.data);
  //     }
  //   });
  // }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.contacts = this.filter(filterValue);
  }

  filter(v: string): Contact[] {
    // return this.contactService
    //   .getContacts()
    //   .filter(
    //     (x) => x.contactname.toLowerCase().indexOf(v.toLowerCase()) !== -1
    //   );
   return this.contacts .filter(
      (x) => x.contactname.toLowerCase().indexOf(v.toLowerCase()) !== -1
    );
  }

  ngOnInit(): void {
    // this.contacts = [];
  }

  // tslint:disable-next-line - Disables all
  addContact(row_obj: ContactData): void {
    this.contacts.unshift({
      contactimg: 'assets/images/profile/user-1.jpg',
      contactname: row_obj.txtContactname,
      contactpost: row_obj.txtContactPost,
      contactadd: row_obj.txtContactadd,
      contactno: row_obj.txtContactno,
      contactinstagram: row_obj.txtContactinstagram,
      contactlinkedin: row_obj.txtContactlinkedin,
      contactfacebook: row_obj.txtContactfacebook,
    });
  }
  newJob(){
    this.router.navigate(['/create_jobs']);
    this.dialog.closeAll()
  }
}
