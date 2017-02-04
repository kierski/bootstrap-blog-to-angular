
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { FeaturesComponent } from './components/pages/new_features.component';
import { PressComponent } from './components/pages/press.component';
import { HiresComponent } from './components/pages/hires.component';
import { AboutComponent } from './components/pages/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'press',
    component: PressComponent
  },
  {
    path: 'hires',
    component: HiresComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
