import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decreament, increament, reset } from '../store/counter.action';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {
  constructor(
    private store:Store<{counterStore:{counter:number}}>
  ){}
increamentFunc(){
  this.store.dispatch(increament());
  
}
decreamentFunc(){
  this.store.dispatch(decreament());
}
resetFunc(){
  this.store.dispatch(reset());
}
}
