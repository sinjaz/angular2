import {Component} from 'angular2/core';
import {MyService} from '../my-service';

@Component({
    templateUrl: './app/header-component/index.html',
    selector: "header-component"
})

export class HeaderComponent{

	constructor(public myService:MyService){
		
	}

	onClick(value){
		this.myService.stuff.push(value);
	}
}