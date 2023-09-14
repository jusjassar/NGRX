import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription,Observable } from 'rxjs';
import { CounterStateModel } from 'src/app/store/counter.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
constructor(private myCounterStore:Store<{counterStore:CounterStateModel}>){}
  title=''
  counter=0;
  counterSubscription!:Subscription
  counter$!:Observable<CounterStateModel>
  ngOnInit(): void {
    this.counter$=this.myCounterStore.select('counterStore')
  }
}
