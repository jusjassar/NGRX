import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterStateModel } from 'src/app/store/counter.model';
import { getcounter } from 'src/app/store/counter.selector';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private mycountStore: Store<{ myCountStore: CounterStateModel }>) { }
  counter!: number;

  ngOnInit(): void {
    this.mycountStore.select(getcounter).subscribe(data => {
      this.counter = data
      console.log('I am from Display')
    })
  }
}
