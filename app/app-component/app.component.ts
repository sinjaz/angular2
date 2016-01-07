import {Component} from 'angular2/core';
import {HeaderComponent} from '../header-component/header-component';

@Component({
    selector: 'my-app',
    directives: [HeaderComponent],
    templateUrl: './app/app-component/index.html'
})
export class AppComponent { }