import {Component, Input} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'my-table',
  templateUrl: 'hw.component.html',
  styles: [`
    td{
        padding: 5px;
    }
    `]
})
export class HomeWork {
  
  @Input()
  rows: number;

  
}
