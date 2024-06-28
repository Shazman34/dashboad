import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';


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
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  providers: [DatePipe]
})
export class PaymentsComponent {
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

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
