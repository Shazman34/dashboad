import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { StarterComponent } from './pages/starter/starter.component';
import { RecurringComponent } from './pages/recurring/recurring.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { OnlinebookingComponent } from './pages/onlinebooking/onlinebooking.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { CustomizerComponent } from './layouts/full/shared/customizer/customizer.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ServicesComponent } from './pages/services/services.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TeamComponent } from './pages/team/team.component';
import { TerritoriesComponent } from './pages/territories/territories.component';
import { AppFullcalendarComponent } from './pages/fullcalendar/fullcalendar.component';
import { CreateJobsComponent } from './pages/jobs/create-jobs/create-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        component: StarterComponent,
        data: {
          title: 'Dashboard',
        },
      },
      {
        path: 'recurring',
        component: RecurringComponent,
        data: {
          title: 'Recurring',
        },
      },
      {
        path: 'coupons',
        component: CouponsComponent,
        data: {
          title: 'Coupons',
        },
      },
      {
        path: 'customers',
        component: CustomizerComponent,
        data: {
          title: 'Customers',
        },
      },
      {
        path: 'jobs',
        component: JobsComponent,
      
        // children: [
        //   { path: 'create_jobs', component: CreateJobsComponent }
        // ]
      },
      {
        path: 'create_jobs',
        component: CreateJobsComponent,
        // data: {
        //   title: 'Jobs',
        // },
      },
      {
        path: 'onlinebookings',
        component: OnlinebookingComponent,
        data: {
          title: 'Online Bookings',
        },
      },
      {
        path: 'schedule',
        component: AppFullcalendarComponent,
        data: {
          title: 'Schedules',
        },
      },
      {
        path: 'payments',
        component: PaymentsComponent,
        data: {
          title: 'Payments',
        },
      },
      {
        path: 'services',
        component: ServicesComponent,
        data: {
          title: 'Services',
        },
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          title: 'Settings',
        },
      }, {
        path: 'team',
        component: TeamComponent,
        data: {
          title: 'Teams',
        },
      }, {
        path: 'territories',
        component: TerritoriesComponent,
        data: {
          title: 'Territories',
        },
      },
      // {
      //   path: '',
      //   redirectTo: '/starter',
      //   pathMatch: 'full',
      // },
      // {
      //   path: 'starter',
      //   loadChildren: () =>
      //     import('./pages/pages.module').then((m) => m.PagesModule),
      // },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
