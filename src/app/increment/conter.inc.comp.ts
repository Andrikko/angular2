import { Component,Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'counter',
    templateUrl: "counter.html",
    styleUrls: ["counter.css"]
    // inputs: ["name"]
})
export class Counter {
    @Input()
    name: string = "default name";
    
    @Input()
    value: number = 0;

    @Input('step')
    step: number = 1;

    increment(){
        this.value = this.value + this.step;
    }
    minus(){
        this.value = this.value - this.step;
    }
}