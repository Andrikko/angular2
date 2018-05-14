import { Component,OnInit} from "@angular/core";
import { HomeWork} from "./hw.component";

@Component({
  moduleId: module.id,
  selector: 'table-tr',
  templateUrl: 'table-tr.component.html',
  styleUrls: ['table-tr.component.css'],
  inputs: ['rows']
})
export class TableTrComponent extends HomeWork {
  Products = [{
      id: 1,
      name: 'product 1',
      price: 100,
      visible: true,
      category: 'Category 1'
    },
    {
      id: 2,
      name: 'product 2',
      price: 200,
      visible: true,
      category: 'Category 3'
    },
    {
      id: 3,
      name: 'product 3',
      price: 300,
      visible: true,
      category: 'Category 2'
    },
    {
      id: 4,
      name: 'product 4',
      price: 400,
      visible: true,
      category: 'Category 3'
    },
    {
      id: 5,
      name: 'product 5',
      price: 500,
      visible: true,
      category: 'Category 2'
    },
    {
      id: 6,
      name: 'product 6',
      price: 600,
      visible: true,
      category: 'Category 1'
    },
    {
      id: 7,
      name: 'product 7',
      price: 700,
      visible: true,
      category: 'Category 1'
    },
    {
      id: 8,
      name: 'product 8',
      price: 800,
      visible: true,
      category: 'Category 3'
    },
    {
      id: 9,
      name: 'product 9',
      price: 900,
      visible: true,
      category: 'Category 1'
    },
    {
      id: 10,
      name: 'product 10',
      price: 1000,
      visible: true,
      category: 'Category 2'
    }
  ];
  rows: number;
  more: boolean;
  disp: boolean = true;

  ngOnInit() {
    for (let i = this.rows; i < this.Products.length; i++) {
      this.Products[i].visible = false;
    }
  }
  delete(value: any) {
    this.Products[value].visible = false;
  }
  getPrice(value: number) {
    if (this.Products[value].price > 500) {
      return "red";
    }
  }
  getChoise(value:string){
    // console.log(value);
    for(let i=0; i< this.Products.length; i++){
      if(value === this.Products[i].category){
        this.Products[i].visible = true;
      }
      else{
        this.Products[i].visible = false;
      }
    }
  }

}
