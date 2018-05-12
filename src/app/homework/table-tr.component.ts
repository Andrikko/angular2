import {Component,OnInit} from "@angular/core";
import {HomeWork} from "./hw.component";

@Component({
  moduleId: module.id,
  selector: 'table-tr',
  templateUrl: 'table-tr.component.html',
  styles: [`
    td{
        padding: 5px;
    }
    `],
  inputs: ['rows']
})
export class TableTrComponent extends HomeWork {
  Products = [{
      id: 1,
      name: 'product 1',
      price: 100,
      visible: true
    },
    {
      id: 2,
      name: 'product 2',
      price: 200,
      visible: true
    },
    {
      id: 3,
      name: 'product 3',
      price: 300,
      visible: true
    },
    {
      id: 4,
      name: 'product 4',
      price: 400,
      visible: true
    },
    {
      id: 5,
      name: 'product 5',
      price: 500,
      visible: true
    },
    {
      id: 6,
      name: 'product 6',
      price: 600,
      visible: true
    },
    {
      id: 7,
      name: 'product 7',
      price: 700,
      visible: true
    },
    {
      id: 8,
      name: 'product 8',
      price: 800,
      visible: true
    },
    {
      id: 9,
      name: 'product 9',
      price: 900,
      visible: true
    },
    {
      id: 10,
      name: 'product 10',
      price: 1000,
      visible: true
    }
  ];
  rows: number;
  my: number;

  ngOnInit() {
    for (let i = this.rows; i < this.Products.length; i++) {
      this.Products[i].visible = false;
    }
  }
}
