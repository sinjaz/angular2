import {Component} from 'angular2/core';
import {MyService} from '../my-service';

@Component({
    templateUrl: './app/header-component/index.html',
    selector: "header-component"
})

export class HeaderComponent{

	constructor(public myService:MyService){
		console.log(myService.stuff);
	}

	onClick(value){
		this.myService.stuff.push(value);
		console.log(this.myService.stuff);
	}
}