import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { ViewportScroller } from '@angular/common';
import { PricingComponent } from './pricing/pricing.component';

interface apps {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  link: string;
}

interface quicklinks {
  id: number;
  title: string;
  link: string;
}

interface demos {
  id: number;
  name: string;
  url: string;
  imgSrc: string;
}

interface testimonials {
  id: number;
  name: string;
  subtext: string;
  imgSrc: string;
}

interface features {
  id: number;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class AppLandingpageComponent {
  @Input() showToggle = true;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  options = this.settings.getOptions();

  constructor(
    private settings: CoreService,
    private scroller: ViewportScroller
  ) {}

  // scroll to demos
  gotoDemos() {
    this.scroller.scrollToAnchor('demos');
  }
  gotoPricing(){
    this.scroller.scrollToAnchor('pricing');
  }
  apps: apps[] = [
    {
      id: 1,
      img: '/assets/images/svgs/icon-dd-chat.svg',
      title: 'Chat Application',
      subtitle: 'Messages & Emails',
      link: '/apps/chat',
    },
    {
      id: 2,
      img: '/assets/images/svgs/icon-dd-cart.svg',
      title: 'eCommerce App',
      subtitle: 'Buy a Product',
      link: '/apps/email/inbox',
    },
    {
      id: 3,
      img: '/assets/images/svgs/icon-dd-invoice.svg',
      title: 'Invoice App',
      subtitle: 'Get latest invoice',
      link: '/apps/invoice',
    },
    {
      id: 4,
      img: '/assets/images/svgs/icon-dd-date.svg',
      title: 'Calendar App',
      subtitle: 'Get Dates',
      link: '/apps/calendar',
    },
  
  ];

  demos: demos[] = [
    {
      id: 1,
      imgSrc: '/assets/images/landingpage/demos/demo-main.jpg',
      name: 'Main',
      url: 'https://modernize-angular-main.netlify.app/dashboards/dashboard1',
    },
    {
      id: 2,
      imgSrc: '/assets/images/landingpage/demos/demo-dark.jpg',
      name: 'Dark',
      url: 'https://modernize-angular-dark.netlify.app/dashboards/dashboard2',
    },
    {
      id: 3,
      imgSrc: '/assets/images/landingpage/demos/demo-firebase.jpg',
      name: 'Authguard',
      url: 'https://modernize-angular-authguard.netlify.app/authentication-side-login',
    },
    {
      id: 4,
      imgSrc: '/assets/images/landingpage/demos/demo-rtl.jpg',
      name: 'RTL',
      url: 'https://modernize-angular-rtl.netlify.app/dashboards/dashboard1',
    },
    {
      id: 5,
      imgSrc: '/assets/images/landingpage/demos/demo-minisidebar.jpg',
      name: 'Minisidebar',
      url: 'https://modernize-angular-minisidebar.netlify.app/dashboards/dashboard1',
    },
    {
      id: 6,
      imgSrc: '/assets/images/landingpage/demos/demo-horizontal.jpg',
      name: 'Horizontal',
      url: 'https://modernize-angular-horizontal.netlify.app/dashboards/dashboard2',
    },
  ];

  appdemos: demos[] = [
    {
      id: 1,
      imgSrc: '/assets/images/landingpage/apps/app-calendar.jpg',
      name: 'Calendar',
      url: 'https://modernize-angular-main.netlify.app/apps/calendar',
    },
    {
      id: 2,
      imgSrc: '/assets/images/landingpage/apps/app-chat.jpg',
      name: 'Chat',
      url: 'https://modernize-angular-main.netlify.app/apps/chat',
    },
    {
      id: 3,
      imgSrc: '/assets/images/landingpage/apps/app-contact.jpg',
      name: 'Contact',
      url: 'https://modernize-angular-main.netlify.app/apps/contacts',
    },
    {
      id: 4,
      imgSrc: '/assets/images/landingpage/apps/app-email.jpg',
      name: 'Email',
      url: 'https://modernize-angular-main.netlify.app/apps/email/inbox',
    },
    {
      id: 5,
      imgSrc: '/assets/images/landingpage/apps/app-courses.jpg',
      name: 'Courses',
      url: 'https://modernize-angular-main.netlify.app/apps/courses',
    },
    {
      id: 6,
      imgSrc: '/assets/images/landingpage/apps/app-employee.jpg',
      name: 'Employee',
      url: 'https://modernize-angular-main.netlify.app/apps/employee',
    },
    {
      id: 7,
      imgSrc: '/assets/images/landingpage/apps/app-note.jpg',
      name: 'Notes',
      url: 'https://modernize-angular-main.netlify.app/apps/notes',
    },
    {
      id: 8,
      imgSrc: '/assets/images/landingpage/apps/app-ticket.jpg',
      name: 'Tickets',
      url: 'https://modernize-angular-main.netlify.app/apps/tickets',
    },
    {
      id: 9,
      imgSrc: '/assets/images/landingpage/apps/app-invoice.jpg',
      name: 'Invoice',
      url: 'https://modernize-angular-main.netlify.app/apps/invoice',
    },
    {
      id: 10,
      imgSrc: '/assets/images/landingpage/apps/app-todo.jpg',
      name: 'Todo',
      url: 'https://modernize-angular-main.netlify.app/apps/todo',
    },
    {
      id: 11,
      imgSrc: '/assets/images/landingpage/apps/app-taskboard.jpg',
      name: 'Taskboard',
      url: 'https://modernize-angular-main.netlify.app/apps/taskboard',
    },
    {
      id: 12,
      imgSrc: '/assets/images/landingpage/apps/app-blog.jpg',
      name: 'Blog List',
      url: 'https://modernize-angular-main.netlify.app/apps/blog/post',
    },
  ];

  testimonials: testimonials[] = [
    {
      id: 1,
      imgSrc: '/assets/images/profile/user-1.jpg',
      name: 'Jenny Wilson',
      subtext: 'Features avaibility',
    },
    {
      id: 2,
      imgSrc: '/assets/images/profile/user-2.jpg',
      name: 'Minshan Cui',
      subtext: 'Features avaibility',
    },
    {
      id: 3,
      imgSrc: '/assets/images/profile/user-3.jpg',
      name: 'Eminson Mendoza',
      subtext: 'Features avaibility',
    },
  ];

  features: features[] = [
    {
      id: 1,
      icon: 'archive',
      title: 'Alarm Installation',
      // subtext:
      //   'We have included 6 pre-defined Theme Colors with Elegant Admin.',
    },
    {
      id: 2,
      icon: 'archive',
      title: 'Lawn Care',
     
    },
    {
      id: 3,
      icon: 'archive',
      title: 'Carpet Cleaning',
    
    },
    {
      id: 4,
      icon: 'archive',
      title: 'Garage Door Repair',
     
    },
    {
      id: 5,
      icon: 'archive',
      title: 'Mobile Auto Detailing',
     
    },
    {
      id: 6,
      icon: 'archive',
      title: 'TV Mounting',
     
    },
    {
      id: 7,
      icon: 'archive',
      title: 'Pressure Washing',
     
    },
    {
      id: 5,
      icon: 'archive',
      title: 'Handyman Services',
     
    },
    {
      id: 5,
      icon: 'archive',
      title: 'Pool Services',
     
    },
    {
      id: 5,
      icon: 'archive',
      title: 'Mobile Phone Repair',
     
    },
    {
      id: 5,
      icon: 'archive',
      title: 'Locksmiths',
     
    },
    {
      id: 5,
      icon: 'archive',
      title: 'Pest Control',
     
    },
    {
      id: 5,
      icon: 'archive',
      title: 'Appliance Repair',
     
    },
    {
      id: 5,
      icon: 'archive',
      title: 'Junk Removal',
     
    },
    {
      id: 5,
      icon: 'archive',
      title: 'Mobile Pet Service',
     
    },
    {
      id: 5,
      icon: 'archive',
      title: 'Painting',
     
    },
  ];

  quicklinks: quicklinks[] = [
    {
      id: 1,
      title: 'Pricing Page',
      link: '/theme-pages/pricing',
    },
    {
      id: 2,
      title: 'Authentication Design',
      link: '/authentication/side-login',
    },
    {
      id: 3,
      title: 'Register Now',
      link: '/authentication/side-register',
    },
    {
      id: 4,
      title: '404 Error Page',
      link: '/authentication/error',
    },
    {
      id: 5,
      title: 'Notes App',
      link: '/apps/notes',
    },
    {
      id: 6,
      title: 'Employee App',
      link: '/apps/employee',
    },
    {
      id: 7,
      title: 'Todo Application',
      link: '/apps/todo',
    },
    {
      id: 8,
      title: 'Treeview',
      link: '/theme-pages/treeview',
    },
  ];
}
