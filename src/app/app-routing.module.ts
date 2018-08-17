import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MarketComponent} from './market/market.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {
  path: 'dashboard', component: DashboardComponent,
    children: [
        { path: '', component: WelcomeComponent, outlet: 'market' },
        { path: 'market', component: MarketComponent, outlet: 'market' }
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
     {
       useHash: true,
       enableTracing: true
     })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
