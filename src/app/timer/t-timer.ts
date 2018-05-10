import { Component, EventEmitter, Output ,Input } from "@angular/core";
//import { start } from "repl";

@Component({
    moduleId: module.id,
    selector: 'timer',
    templateUrl: 't-timer.html'
})
export class Ttimer{
    private currentValue: number = 0;
    private intervalObj: any;
    
    @Input()
    interval: number = 1000;

    @Output()
    tick: EventEmitter<number> = new EventEmitter();

    start(){
        if(this.intervalObj) return;
        this.intervalObj = setInterval(() => {this.callback()},this.interval);
    }
    stop(){
        if(!this.intervalObj) return;
        clearInterval(this.intervalObj);
        this.intervalObj = false;
    }
    reset(){
        this.currentValue = 0;
    }
    pause(){
        this.stop();
        alert(this.currentValue);
    }
    private callback(){
        this.currentValue++;
        this.tick.emit(this.currentValue);
    }
}