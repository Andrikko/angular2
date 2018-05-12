import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'inter',
    templateUrl: 'interpolation.component.html',
    styleUrls: ['interpolation.component.css']
})
export class Inter{
    // public FirstName: string;
    // public LastName: string;
    // constructor(){
    //     this.FirstName = 'Andrii';
    //     this.LastName = "Loza";
    // }
    // getFullName(){
    //     return this.FirstName + " " + this.LastName;
    // }

    // imageSrc: string = "app/images/a.png";
    // title: string = 'angular2';

    value: number = 40;
    plus(){
        this.value ++;
    }
    minus(){
        this.value --;
    }

    isNice:boolean = false;
    isError: boolean= false;
    doNice(){
        this.isNice= !this.isNice;
    }
    doError(){
        this.isError = !this.isError;
    }
}