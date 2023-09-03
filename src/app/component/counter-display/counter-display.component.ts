import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent  implements OnInit{
constructor(private store:Store<{counterStore:{counter:number}}>){}
  counterVal!:number;

  ngOnInit(): void {
   this.store.select('counterStore').subscribe(res=>{
    this.counterVal=res.counter
   })
  }
}
