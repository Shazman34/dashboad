import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
  constructor(private router: Router) {}
  createJob(){
    this.router.navigate(['/jobs/create_jobs']);
  }
}
