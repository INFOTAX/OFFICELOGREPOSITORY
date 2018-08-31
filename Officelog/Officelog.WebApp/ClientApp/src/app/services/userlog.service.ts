
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ServiceBase } from '../shared_filess/service-base';
import { Observable } from "../../../node_modules/rxjs";
import { IUserlog } from '../login-user-form/userlogin';
;
@Injectable({
    providedIn: 'root'
})
export class UserlogService extends ServiceBase<IUserlog> {

    userLogs: IUserlog[];
    constructor(private http: HttpClient) {
        super(http,'')
    }

    intializeObject(): IUserlog {
        return {
            id : 0,
            userName: "",
            userContact: "",

            userDesigination: "",

        }
    }
   
}


