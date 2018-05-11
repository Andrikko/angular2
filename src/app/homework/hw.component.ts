import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'my-table',
  templateUrl: 'hw.component.html',
  styles: [`
    td{
        padding: 5px;
    }
    `],
    inputs: ['rows']
})
export class HomeWork {
  rows: number;

  a:number = this.rows;
//   alert(){
//       console.log(this.rows);
//   }
}
