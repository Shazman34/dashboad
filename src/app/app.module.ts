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
import { DeletePopupComponent } from './pages/popups/delete-popup/delete-popup.component';
import { CustomerInfoComponent } from './pages/customers/customer-info/customer-info.component';
import { AddTeamComponent } from './pages/team/add-team/add-team.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddServiceComponent } from './pages/services/add-service/add-service.component';
import { ServiceDetailedInfoComponent } from './pages/services/service-detailed-info/service-detailed-info.component';
import { SelectPaymentMethodComponent } from './pages/jobs/select-payment-method/select-payment-method.component';
import { ReviewSummaryComponent } from './pages/jobs/review-summary/review-summary.component';
import { CreateCouponsComponent } from './pages/coupons/create-coupons/create-coupons.component';
import { AppLandingpageComponent } from './pages/landingpage/landingpage.component';
import { SettingCardComponent } from './pages/settings/setting-card/setting-card.component';
import { AccountComponent } from './pages/settings/setting-card-details/account/account.component';
import { AvailabilityComponent } from './pages/settings/setting-card-details/availability/availability.component';
import { BillingComponent } from './pages/settings/setting-card-details/billing/billing.component';
import { BrandingComponent } from './layouts/full/vertical/sidebar/branding.component';
import { BussinessDetailsComponent } from './pages/settings/setting-card-details/bussiness-details/bussiness-details.component';
import { CalendarSyncingComponent } from './pages/settings/setting-card-details/calendar-syncing/calendar-syncing.component';
import { ClientTeamNotificationComponent } from './pages/settings/setting-card-details/client-team-notification/client-team-notification.component';
import { DevelopersComponent } from './pages/settings/setting-card-details/developers/developers.component';
import { FieldAppComponent } from './pages/settings/setting-card-details/field-app/field-app.component';
import { JobAssignmentComponent } from './pages/settings/setting-card-details/job-assignment/job-assignment.component';
import { ReschedulingCancellationComponent } from './pages/settings/setting-card-details/rescheduling-cancellation/rescheduling-cancellation.component';
import { SchedulingPoliciesComponent } from './pages/settings/setting-card-details/scheduling-policies/scheduling-policies.component';
import { ServiceAreaComponent } from './pages/settings/setting-card-details/service-area/service-area.component';

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
    AddTeamComponent,
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
    RecurringComponent,
    DeletePopupComponent,
    CustomerInfoComponent,
    AddServiceComponent,
    ServiceDetailedInfoComponent,
    SelectPaymentMethodComponent,
    ReviewSummaryComponent,
    CreateCouponsComponent,
    AppLandingpageComponent,
    SettingCardComponent,
    AccountComponent,
    AvailabilityComponent,
    BillingComponent,
    BussinessDetailsComponent,
    CalendarSyncingComponent,
    ClientTeamNotificationComponent,
    DevelopersComponent,
    FieldAppComponent,
    JobAssignmentComponent,
    PaymentsComponent,
    ReschedulingCancellationComponent,
    SchedulingPoliciesComponent,
    ServiceAreaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    
   
    MaterialModule,
    FormsModule,
    DragDropModule,
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
