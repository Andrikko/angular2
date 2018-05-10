import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'host-timer',
    templateUrl : "timer.component.html",
    styleUrls: ['timer.component.css']
})
export class Timer{
    tickHandler1(value){
        console.log(value);
    }
    tickHandler2(value){
        console.log(value);
    }
}