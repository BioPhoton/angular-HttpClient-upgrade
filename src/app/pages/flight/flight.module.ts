import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'

import {EditComponent as FlightEditComponent} from './components/edit/edit.component'
import {CreateComponent as FlightCreateComponent} from './components/create/create.component'
import {DetailComponent as FlightDetailComponent} from './components/detail/detail.component'
import {SearchComponent as FlightSearchComponent} from './components/search/search.component'

import {FlightRoutingModule} from './flight-routing.module'
import {FlightResolver} from './resolver/flight.resolver'

const components = [
  FlightSearchComponent, FlightDetailComponent, FlightEditComponent, FlightCreateComponent,
]
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlightRoutingModule
  ],
  declarations: [components],
  providers: [FlightResolver],
  exports: [components]
})
export class FlightModule {
}
