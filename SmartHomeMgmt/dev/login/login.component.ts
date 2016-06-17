import {Component,OnInit} from 'angular2/core';

import {FormBuilder, Validators, ControlGroup} from "angular2/common";
import {User} from "./user";

@Component({
    selector:'login',
    templateUrl: 'templates/loginForm.html'
})
export class LoginFormComponent implements OnInit{
    //myuser: User;
    loginForm: ControlGroup;

    constructor(private _formBilder: FormBuilder) {}
    doLogin(val) {
        console.log("hey there , am in submit");
        console.log(val);
        //console.log(this.loginForm.value);

    }

    ngOnInit():any{
        this.loginForm= this._formBilder.group({
            'username'  : ["", Validators.required],// *first parameter is default value u want to set
                                //* username is same as the variable we used in interface user.
            'password'  :["", Validators.required]
        })
    }
}