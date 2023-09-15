import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterStateModel } from 'src/app/store/counter.model';
import { gettitle } from 'src/app/store/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent implements OnInit{
constructor(private myCountStore:Store<{myCountStore:CounterStateModel}>){}
  title!:string;
  title$!:Observable<string>
  ngOnInit(): void {
    this.title$=this.myCountStore.select(gettitle)
  }
}
