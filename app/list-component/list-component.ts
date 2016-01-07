import {Component} from 'angular2/core';
import {MyService} from '../my-service';
import {NgStyle} from 'angular2/common';

@Component({
    templateUrl: './app/list-component/index.html',
    selector: "list-component"
})

export class ListComponent{

	constructor(public myService:MyService){
		console.log("List", myService.stuff);
	}
}