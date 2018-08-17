import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MarketComponent} from './market/market.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'market', component: MarketComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
     {
       enableTracing: true
     })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
