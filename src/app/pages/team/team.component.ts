import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddTeamComponent } from './add-team/add-team.component';
export interface TeamMember {
  name: string;
  email: string;
  role: string;
  serviceProvider: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {name: 'waheed', email: 'waheedraza708@gmail.com', role: 'Account Owner', serviceProvider: 'Yes'},
  // Add more team members here
];
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  // encapsulation: ViewEncapsulation.None,

})
export class TeamComponent implements OnInit {
  displayedColumns: string[] = ['teamMember', 'accessRole', 'serviceProvider', 'actions'];
  dataSource = new MatTableDataSource(TEAM_MEMBERS);

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  viewCustomerInfo(action: string, element: TeamMember): void {
    // Handle the view action
    console.log(action, element);
  }

  addTeam(): void {
  
    const dialogRef = this.dialog.open(AddTeamComponent, {
      width:'600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("reuslt on closing ",result)
    

    })
  }
}
