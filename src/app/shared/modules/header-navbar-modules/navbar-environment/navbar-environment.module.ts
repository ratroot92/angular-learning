import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {NavbarEnvironmentComponent} from './components/navbar/navbar-environment.component'

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: [NavbarEnvironmentComponent],
  exports: [NavbarEnvironmentComponent],
})
export class NavbarEnvironmentModule {}
