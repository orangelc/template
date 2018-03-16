import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RegistryComponent } from './components/registry/registry.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { DocumentManagementComponent } from './components/document-management/document-management.component';

const routes: Routes = [
  { path: '', component: RegistryComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'document-management', component: DocumentManagementComponent },
  { path: '**', component: RegistryComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistryComponent,
    TrackingComponent,
    SchedulerComponent,
    DocumentManagementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
