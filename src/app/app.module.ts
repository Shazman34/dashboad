import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

// perfect scrollbar
import { NgScrollbarModule } from 'ngx-scrollbar';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { FilterPipe } from './pipe/filter.pipe';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RecurringComponent } from './pages/recurring/recurring.component';
import { StarterComponent } from './pages/starter/starter.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { OnlinebookingComponent } from './pages/onlinebooking/onlinebooking.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { TerritoriesComponent } from './pages/territories/territories.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { AppFullcalendarComponent, CalendarDialogComponent } from './pages/fullcalendar/fullcalendar.component';
import { CalendarFormDialogComponent } from './pages/fullcalendar/calendar-form-dialog/calendar-form-dialog.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatNativeDateModule } from '@angular/material/core';
import { CreateJobsComponent } from './pages/jobs/create-jobs/create-jobs.component';
import { CreateNewCustomerComponent } from './pages/jobs/create-new-customer/create-new-customer.component';
import { AddCustomServiceComponent } from './pages/jobs/add-custom-service/add-custom-service.component';

export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, BlankComponent, FilterPipe,
    StarterComponent,
    CustomersComponent,
    JobsComponent,
    CreateNewCustomerComponent,
    CreateJobsComponent,
    OnlinebookingComponent,
    AddCustomServiceComponent,
    PaymentsComponent,
    SettingsComponent,
    ScheduleComponent,
    AppFullcalendarComponent,
    CalendarFormDialogComponent,
    CalendarDialogComponent,
    ServicesComponent,
    TeamComponent,
    TerritoriesComponent,
    CouponsComponent,
    RecurringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
   
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    NgScrollbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    FullComponent,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatNativeDateModule,
    MaterialModule
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
