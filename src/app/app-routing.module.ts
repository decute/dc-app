import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AgreementComponent } from './agreement/agreement.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HoldingMissedComponent } from './holding-missed/holding-missed.component';
import { LoginComponent } from './login/login.component';
import { PortfolioCardDetailsComponent } from './portfolio-card-details/portfolio-card-details.component';
import { PortfolioCardOverviewComponent } from './portfolio-card-overview/portfolio-card-overview.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
     path: 'login',
     component: LoginComponent
  },
  {
    path: 'live-deals',
    loadChildren: () => import('./live-deals/live-deals.module').then( m => m.LiveDealsPageModule)
  },
  {
    path: 'review',
    component: ReviewComponent,
  },
  {
    path: 'agreement',
    component: AgreementComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },

  {
    path: 'portfolio-overview',
    component: PortfolioCardDetailsComponent,
  },

  {
    path: 'company-overview',
    component: PortfolioCardOverviewComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
