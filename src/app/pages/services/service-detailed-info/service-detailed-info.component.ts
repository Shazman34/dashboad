import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detailed-info',
  templateUrl: './service-detailed-info.component.html',
  styleUrls: ['./service-detailed-info.component.scss']
})
export class ServiceDetailedInfoComponent implements OnInit {
  options = [
    { icon: 'build', title: 'Service Details', description: 'Name, description, duration, and price' },
    { icon: 'label', title: 'Service Modifiers', description: 'Add selectable options that can be used to customize this service\'s price and duration' },
    { icon: 'list_alt', title: 'Intake Questions', description: 'Add custom form fields to collect additional info' },
    { icon: 'schedule', title: 'Availability', description: 'Use your business\'s default hours, or show custom timeslots for this service' },
    { icon: 'group', title: 'Team Requirements & Assignment Options', description: 'Add required skills and customize how jobs should be assigned for this service' },
    { icon: 'autorenew', title: 'Recurring Options', description: 'Give customers the option to book this service as a recurring appointment' },
    { icon: 'trending_up', title: 'Price Adjustment Rules', description: 'Further customize pricing when certain booking conditions are met' },
    { icon: 'sync', title: 'Payments', description: 'Further customize pricing when certain booking conditions are met' },
    { icon: 'group', title: 'How it Works, FAQ, Testimonials, & Highlights', description: 'Add required skills and customize how jobs should be assigned for this service' },
    { icon: 'autorenew', title: 'Booking Page', description: 'Give customers the option to book this service as a recurring appointment' },
    { icon: 'trending_up', title: 'Booking Link & Widgets', description: 'Further customize pricing when certain booking conditions are met' },
  ];
  serviceInfo:any;
  constructor(private route: ActivatedRoute){
  }

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    // const id = params['id'];
    // const name = params['name'];
    this.serviceInfo=params
    console.log("params", params);
  });
}
goBack(){
  
}

}
