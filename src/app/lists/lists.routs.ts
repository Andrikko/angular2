import { List1Component, List2Component} from './index';
import { MessageBoxHost } from '../message-box/message-box-host.component';
import { Increment } from '../increment/increment.components';
import { Timer } from '../timer/timer.component';
import { nameCardHostComponent } from '../compProp/name-card-host.component';

export const routs = [
    { path: 'list1', component: List1Component},
    { path: 'list2', component: List2Component},
    { path: 'message-box', component: MessageBoxHost},
    { path: 'increment', component: Increment},
    { path: 'timer', component: Timer},
    { path: 'namecard', component: nameCardHostComponent},
    { path: '', redirectTo: 'list1', pathMatch: 'full'}
];