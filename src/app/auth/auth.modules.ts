import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { reducers } from "src/app/auth/store/reducer";
import { AuthService } from "src/app/auth/services/auth.service";



const routes: Routes = [
    {
      path:"register",
      component:RegisterComponent
    }
  ];


@NgModule({
    declarations:[RegisterComponent],
    imports:[CommonModule,RouterModule.forChild(routes),ReactiveFormsModule,StoreModule.forFeature('auth',reducers)],
    providers:[AuthService],

})

export class AuthModule {
    constructor(){}
}
