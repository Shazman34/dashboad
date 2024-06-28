import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CreateNewCustomerComponent } from '../jobs/create-new-customer/create-new-customer.component';
import { DeletePopupComponent } from '../popups/delete-popup/delete-popup.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

export interface Employee {
  id: number;
  fullName: string;
  Position: string;
  email: string;
  phoneNumber: number;
  DateOfJoining: Date;
  Salary: number;
  Projects: number;
  imagePath: string;
  primaryAddress:string
}

const employees = [
  {
    id: 1,
    fullName: 'Johnathan Deo',
    Position: 'Seo Expert',
    email: 'r@gmail.com',
    phoneNumber: 9786838,
    primaryAddress:"USA ",
    DateOfJoining: new Date('01-2-2020'),
    Salary: 12000,
    Projects: 10,
    imagePath: 'assets/images/profile/user-2.jpg',
  },
  {
    id: 2,
    fullName: 'Mark Zukerburg',
    Position: 'Web Developer',
    email: 'mark@gmail.com',
    phoneNumber: 8786838,
    DateOfJoining: new Date('04-2-2020'),
    Salary: 12000,
    primaryAddress:"USA ",
    Projects: 10,
    imagePath: 'assets/images/profile/user-3.jpg',
  },
  {
    id: 3,
    fullName: 'Sam smith',
    Position: 'Web Designer',
    email: 'sam@gmail.com',
    phoneNumber: 7788838,
    DateOfJoining: new Date('02-2-2020'),
    Salary: 12000,
    primaryAddress:"USA ",
    Projects: 10,
    imagePath: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 4,
    fullName: 'John Deo',
    Position: 'Tester',
    email: 'john@gmail.com',
    phoneNumber: 8786838,
    DateOfJoining: new Date('03-2-2020'),
    Salary: 12000,
    primaryAddress:"USA ",
    Projects: 11,
    imagePath: 'assets/images/profile/user-5.jpg',
  },
  {
    id: 5,
    fullName: 'Genilia',
    Position: 'Actor',
    email: 'genilia@gmail.com',
    phoneNumber: 8786838,
    DateOfJoining: new Date('05-2-2020'),
    Salary: 12000,
    primaryAddress:"USA ",
    Projects: 19,
    imagePath: 'assets/images/profile/user-6.jpg',
  },
  {
    id: 6,
    fullName: 'Jack Sparrow',
    Position: 'Content Writer',
    email: 'jac@gmail.com',
    phoneNumber: 8786838,
    DateOfJoining: new Date('05-21-2020'),
    Salary: 12000,
    primaryAddress:"USA ",
    Projects: 5,
    imagePath: 'assets/images/profile/user-7.jpg',
  },
  {
    id: 7,
    fullName: 'Tom Cruise',
    Position: 'Actor',
    email: 'tom@gmail.com',
    phoneNumber: 8786838,
    DateOfJoining: new Date('02-15-2019'),
    Salary: 12000,
    primaryAddress:"USA ",
    Projects: 9,
    imagePath: 'assets/images/profile/user-3.jpg',
  },
  {
    id: 8,
    fullName: 'Hary Porter',
    Position: 'Actor',
    email: 'hary@gmail.com',
    phoneNumber: 8786838,
    DateOfJoining: new Date('07-3-2019'),
    Salary: 12000,
    primaryAddress:"USA ",
    Projects: 7,
    imagePath: 'assets/images/profile/user-6.jpg',
  },
  {
    id: 9,
    fullName: 'Kristen Ronaldo',
    Position: 'Player',
    email: 'kristen@gmail.com',
    phoneNumber: 8786838,
    DateOfJoining: new Date('01-15-2019'),
    Salary: 12000,
    primaryAddress:"USA ",
    Projects: 1,
    imagePath: 'assets/images/profile/user-5.jpg',
  },
];
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [DatePipe]
})
export class CustomersComponent {
  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  searchText: any;
  displayedColumns: string[] = [
    '#',
    'name',
    'email',
    'mobile',
    'date of joining',
    'salary',
    'primaryAddress',
    'projects',
    'action',
  ];
  dataSource = new MatTableDataSource(employees);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

  constructor(public dialog: MatDialog, public datePipe: DatePipe) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: string, obj: any): void {
    obj.action = action;
    const dialogRef = this.dialog.open(CreateNewCustomerComponent, {
      data: obj,
      width:'600px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  openDialogDel(action: string, obj: any): void {
    // obj.action = action;
    console.log("obj",obj)
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      width:'400px',
      data: obj,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("reuslt on closing ",result)
      if (result === 'Delete') {
        this.deleteRowData(result.data);
      }

    })
  }

  addRowData(row_obj: Employee): void {
    this.dataSource.data.unshift({
      id: employees.length + 1,
      fullName: row_obj.fullName,
      Position: row_obj.Position,
      email: row_obj.email,
      phoneNumber: row_obj.phoneNumber,

      DateOfJoining: new Date(),
      Salary: row_obj.Salary,
      primaryAddress:row_obj.primaryAddress,
      Projects: row_obj.Projects,
      imagePath: row_obj.imagePath,
    });
    this.dialog.open(CreateNewCustomerComponent);
    this.table.renderRows();
  }

  updateRowData(row_obj: Employee): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
      if (value.id === row_obj.id) {
        value.fullName = row_obj.fullName;
        value.Position = row_obj.Position;
        value.email = row_obj.email;
        value.phoneNumber = row_obj.phoneNumber;
        value.DateOfJoining = row_obj.DateOfJoining;
        value.primaryAddress= row_obj.primaryAddress;
        value.Salary = row_obj.Salary;
        value.Projects = row_obj.Projects;
        value.imagePath = row_obj.imagePath;
      }
      return true;
    });
  }

  deleteRowData(row_obj: Employee): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
      return value.id !== row_obj.id;
    });
  }

  viewCustomerInfo(action:string,info:any){
    console.log("obj",info)
    const dialogRef = this.dialog.open(CustomerInfoComponent, {
      width:'800px',
      data: info,
    });
    dialogRef.afterClosed().subscribe((result) => {
     

    })
    
console.log("action",action,"info",info)
  }
}
