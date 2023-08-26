import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterReducer } from '../store/counter.reducer';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit {
  constructor(
    private store:Store<{counterStore:{counter:number}}>
  ){}
  counterVal!:number;
  ngOnInit(): void {
    this.store.select('counterStore').subscribe(res=>{
      this.counterVal=res.counter
    })
  }
}
