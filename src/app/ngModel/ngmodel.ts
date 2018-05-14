import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'test-module',
    templateUrl: 'ngmodel.html',
    styleUrls: ["ngModel.css"]
})
export class TestModel {
    xValue: number = 0;
    yValue: number = 0;
    result: number;

    calculate(){
        this.result = +this.xValue + +this.yValue;
    }

    reset(){
        this.xValue = this.yValue = 0;
        this.result = undefined;
    }

    settings = {
        error: true,
        highlight: false
    }
    choise: string ='3';
}