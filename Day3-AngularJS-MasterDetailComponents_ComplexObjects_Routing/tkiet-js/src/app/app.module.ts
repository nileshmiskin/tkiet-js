import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CamelcasePipe } from './camelcase.pipe';
import { SelectedCarComponent } from './selected-car/selected-car.component';
import { DealerComponent } from './dealer/dealer.component';
import { MarketComponent } from './market/market.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CamelcasePipe,
    SelectedCarComponent,
    DealerComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
