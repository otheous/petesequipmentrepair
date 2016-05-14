import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {ContactComponent} from './contact.component';
import {RepairServicesComponent} from './repair-services.component';
import {HomeComponent} from './home.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Home']">Home</a>
      <a [routerLink]="['Services']">Services</a>
      <a [routerLink]="['ContactUs']">Contact Us</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/services',
    name: 'Services',
    component: RepairServicesComponent
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: ContactComponent
  }
])
export class AppComponent {
  title = "Pete's Equipment Repair";
}
