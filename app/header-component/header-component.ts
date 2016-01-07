import {Component} from 'angular2/core';
import {MyService} from '../my-service';
import {AwesomeModel} from "../awesome-model";

@Component({
    templateUrl: './app/header-component/index.html',
    selector: "header-component"
})

export class HeaderComponent{

	myModel:AwesomeModel = new AwesomeModel();

	constructor(public myService:MyService){
		
	}

	onSubmit(){
		this.myService.stuff.push(this.myModel);
		console.log(this.myService.stuff);
		this.myModel = new AwesomeModel();
	}
}