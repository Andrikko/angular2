import { List1Component, List2Component} from './index';
import { MessageBoxHost } from '../message-box/message-box-host.component';
import { Increment } from '../increment/increment.components';
import { Timer } from '../timer/timer.component';
import { nameCardHostComponent } from '../compProp/name-card-host.component';
import { BlockHostComponent } from '../vievChild/block-host.component';
import { HomeWork } from '../homework/hw.component';
import { TestModel } from '../ngModel/ngmodel';

export const routs = [
    { path: 'list1', component: List1Component},
    { path: 'list2', component: List2Component},
    { path: 'message-box', component: MessageBoxHost},
    { path: 'increment', component: Increment},
    { path: 'timer', component: Timer},
    { path: 'namecard', component: nameCardHostComponent},
    { path: 'vievChild', component: BlockHostComponent},
    { path: 'homeWork', component: HomeWork},
    { path: 'test-model', component: TestModel},
    { path: '', redirectTo: 'list1', pathMatch: 'full'}
];