import {Component ,Input} from "@angular/core";
import { HomeWorkService } from "./hw.service";

@Component({
  moduleId: module.id,
  selector: 'my-table',
  providers: [HomeWorkService],
  templateUrl: 'hw.component.html',
  styles: [`
    td{
        padding: 5px;
    }
    `]
})
export class HomeWork {

  constructor(public homeworkService: HomeWorkService){}

  @Input()
  rows: number;
}
