import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addFuncAction, reset, subsFuncAction} from 'src/app/store/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counterVal!:number;
 
constructor(private store:Store<{counterStore:{counter:number}}>){}
  addition(){
    this.store.dispatch(addFuncAction())
  }
  substract(){
    this.store.dispatch(subsFuncAction())
    
  }
  reset(){
    this.store.dispatch(reset())
  }
 
}