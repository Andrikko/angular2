import { Component } from "@angular/core";
//import { ThrowStmt } from "@angular/compiler";

@Component({
    moduleId: module.id,
    selector: 'namecard',
    templateUrl: 'name-card.component.html',
    inputs: ['firstName',"lastName"]
})
export class nameCardComponent{
    firstName: string;

    private _lastName: string;

    get lastName():string{
        return this._lastName;
    }
    set lastName(value:string){
        this._lastName = value;
    }
    get FullName():string{
        return this.firstName + " " + this._lastName;
    }
}