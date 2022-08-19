import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from 'src/app/auth/auth.modules'
import {environment} from 'src/environments/environment'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {EffectsModule} from '@ngrx/effects'
import {AuthInterceptor} from 'src/app/shared/interceptors/auth.interceptor'
import {PersistenceService} from './shared/services/persistence.service'
import {NavbarSwitchModule} from 'src/app/shared/modules/header-navbar-modules/navbar-switch/switch.module'
import {NavbarEnvironmentModule} from './shared/modules/header-navbar-modules/navbar-environment/navbar-environment.module'
import {NavbarOopModule} from './shared/modules/header-navbar-modules/navbar-oop/navbar-oop.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    //

    NavbarSwitchModule,
    NavbarEnvironmentModule,
    NavbarOopModule,

    //
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,

    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [PersistenceService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
