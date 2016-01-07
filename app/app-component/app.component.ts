import {Component} from 'angular2/core';
import {HeaderComponent} from '../header-component/header-component';
import {ListComponent} from '../list-component/list-component';

@Component({
    selector: 'my-app',
    directives: [HeaderComponent, ListComponent],
    templateUrl: './app/app-component/index.html'
})
export class AppComponent { }