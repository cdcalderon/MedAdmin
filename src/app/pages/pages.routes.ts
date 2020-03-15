import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartsComponent } from './charts/charts.component';
import { PagesComponent } from './pages.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'charts', component: ChartsComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
]
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
