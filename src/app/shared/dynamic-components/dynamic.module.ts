/* eslint-disable @typescript-eslint/no-empty-function */
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {DynamicComponent} from './components/holder.component'

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: [DynamicComponent],
  exports: [DynamicComponent],
})
export class DynamicModule {
  constructor() {}
}
