import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map, Observable } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "../types/authResponse.interface";

@Injectable()
export class AuthService{
    constructor(private http:HttpClient){

    }

    register(data:RegisterRequestInterface):Observable<CurrentUserInterface>{
        const url=environment.authApiUrl+"/register";
        return this.http.post<AuthResponseInterface>(url,data).pipe((map(
            (response:AuthResponseInterface)  =>response.user)

            ))


    }
}