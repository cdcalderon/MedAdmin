import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartsComponent } from './charts/charts.component';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    SharedModule,
    PAGES_ROUTES,
  ],
  declarations: [
    DashboardComponent,
    ProgressComponent,
    ChartsComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    ChartsComponent,
    PagesComponent
  ]
})
export class PagesModule { }
