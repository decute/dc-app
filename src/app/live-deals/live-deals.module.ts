import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveDealsPageRoutingModule } from './live-deals-routing.module';

import { LiveDealsPage } from './live-deals.page';
import { DealCardComponent } from '../deal-card/deal-card.component';
import { RecentlyClosedCardComponent } from '../recently-closed-card/recently-closed-card.component';
import { DcDealCardComponent } from '../dc-deal-card/dc-deal-card.component';
import { ContactUsCardComponent } from '../contact-us-card/contact-us-card.component';
import { FeedComponent } from '../feed/feed.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveDealsPageRoutingModule
  ],
  exports: [LiveDealsPage],
  declarations: [LiveDealsPage,
                DealCardComponent, 
                RecentlyClosedCardComponent, 
                DcDealCardComponent,
                ContactUsCardComponent,
                FeedComponent
              ]
})
export class LiveDealsPageModule {}
