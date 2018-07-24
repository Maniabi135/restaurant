import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LocationComponent } from './location/location.component';


const routes: Routes = [
  {
    path: '',
    component: LocationComponent
  },
  {
    path: 'city',
    component: CityComponent,
  },
  {
    path: 'restaurant',
    component: RestaurantComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
