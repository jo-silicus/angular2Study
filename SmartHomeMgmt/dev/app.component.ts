import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {LoginFormComponent} from './login/login.component';

@Component({
    selector: 'root',
    template: `
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `,
    directives:[ROUTER_DIRECTIVES ]
})
@RouteConfig([
    {path: '/', name: 'Loginform', component: LoginFormComponent},

])

export class AppComponent {
 
}


