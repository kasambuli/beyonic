import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { NoDataComponent } from './no-data/no-data.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartComponent } from './chart/chart.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselComponent } from './carousel/carousel.component';
import { BalanceComponent } from './balance/balance.component';
import { FooterComponent } from './footer/footer.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomepageComponent,
    NoDataComponent,
    ChartComponent,
    CarouselComponent,
    BalanceComponent,
    FooterComponent,
    ActionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatToolbarModule,
    NgApexchartsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
