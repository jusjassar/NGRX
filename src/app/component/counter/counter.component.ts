import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customAct, incAct, titleAct } from 'src/app/store/counter.action';
import { CounterStateModel } from 'src/app/store/counter.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(private mycountStore:Store<{myCountStore:CounterStateModel}>){}
  customCounterVal!:number
  inc(){
    this.mycountStore.dispatch(incAct())
  }
  custAction(cutActVal:string,custCount:number){
    this.mycountStore.dispatch(customAct({custAct:cutActVal,custCount:+custCount}))
  }
  titleChng(){
    this.mycountStore.dispatch(titleAct())
  }
}
