import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DealCardComponent } from '../deal-card/deal-card.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RecentlyClosedCardComponent } from '../recently-closed-card/recently-closed-card.component';
import { DcDealCardComponent } from '../dc-deal-card/dc-deal-card.component';
import { ContactUsCardComponent } from '../contact-us-card/contact-us-card.component';
import { FeedComponent } from '../feed/feed.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { HoldingMissedComponent } from '../holding-missed/holding-missed.component';
import { PortfolioCardDetailsComponent } from '../portfolio-card-details/portfolio-card-details.component';
import { PortfolioCardOverviewComponent } from '../portfolio-card-overview/portfolio-card-overview.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { AgreementComponent } from '../agreement/agreement.component';
import { ReviewComponent } from '../review/review.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  declarations: [HomePage, 
                DealCardComponent, 
                RecentlyClosedCardComponent, 
                DcDealCardComponent,
                ContactUsCardComponent,
                FeedComponent,
                PortfolioComponent,
                HoldingMissedComponent,
                PortfolioCardDetailsComponent,
                PortfolioCardOverviewComponent,
                ProfileComponent,
                LoginComponent,
                ChangePasswordComponent,
                AgreementComponent,
                ReviewComponent
              ]
})
export class HomePageModule {}
