import { MarketComponent } from './market/market.component';
import { DealerComponent } from './dealer/dealer.component';
import { CarComponent } from './car/car.component';
import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: 'cars',
        component: CarComponent
    },
    {
        path: 'dealers',
        component: DealerComponent
    },
    {
        path: 'market',
        component: MarketComponent
    },
    {
        path: '',
        redirectTo: '/cars',
        pathMatch: 'full'
    }
];

