import {Component} from 'angular2/core';

@Component({
    templateUrl: './app/header-component/index.html',
    selector: "header-component"
})

export class HeaderComponent{
	onClick(value){
		console.log(value);
	}
}