@import {Injectable} from "angular2/core";
@import {AwesomeModel} from "./awesome-model";

@Injectable()

export class MyService{
	stuff = [
		new AwesomeModel("Eat"),
		new AwesomeModel("Sleep"),
		new AwesomeModel("Code")
	]
}