export class AwesomeModel{
	isDone:boolean = false;

	constructor(public title:string = ""){}

	toggle(){
		this.isDone = !this.isDone;
	}

	getFontWeight(){
		return this.isDone ? "bold" : "normal";
	}
}