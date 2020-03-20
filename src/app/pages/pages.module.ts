import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartsComponent } from './charts/charts.component';
import { PagesComponent } from './pages.component';
import { IncrementorComponent } from '../components/incrementor/incrementor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    ProgressComponent,
    ChartsComponent,
    PagesComponent,
    IncrementorComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    ChartsComponent,
    PagesComponent
  ]
})
export class PagesModule { }
