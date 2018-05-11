import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";  //модуль маршрутизації


import { AppComponent } from './app.component';
import { Increment } from "../app/increment/increment.components";
import { Timer } from "../app/timer/timer.component";
import { ListModule, routs} from './lists/index';
import { Counter } from "./increment/conter.inc.comp";
import { Ttimer } from "./timer/t-timer";
import { nameCardComponent } from "./compProp/name-card.component";
import { nameCardHostComponent } from "./compProp/name-card-host.component";
import { MessageBoxComponent } from "./message-box/message-box.component";
import { MessageBoxHost } from "./message-box/message-box-host.component";
import { BlockHostComponent } from "./vievChild/block-host.component";
import { BlockComponent } from "./vievChild/block.component";

@NgModule({
  declarations: [
    AppComponent,Increment,Counter,Timer,Ttimer,nameCardComponent,nameCardHostComponent,MessageBoxComponent,MessageBoxHost,BlockHostComponent,BlockComponent
  ],
  imports: [
    BrowserModule,
    ListModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
