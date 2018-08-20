import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketComponent } from './market/market.component';
import { MaindeckComponent } from './maindeck/maindeck.component';
import { MarketchartComponent } from './marketchart/marketchart.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {
  path: 'dashboard', component: DashboardComponent,
    children: [
        { path: '', component: MaindeckComponent, outlet: 'market' },
        { path: 'market', component: MarketComponent, outlet: 'market' },
        { path: 'chart', component: MarketchartComponent, outlet: 'market' }
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
     {
       useHash: true,
     })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
