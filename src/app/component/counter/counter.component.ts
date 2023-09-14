import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementCountAct, titleAct } from 'src/app/store/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(
    private myCounterStore:Store<{counterStore:{counter:number}}>
  ){}
  incr(){
    this.myCounterStore.dispatch(incrementCountAct())
  }
  title(){
    this.myCounterStore.dispatch(titleAct())
  }
}
