import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AssignUser, DeleteUser, ElevateUser } from 'src/app/shared/store/user.action';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit {
  constructor(
    private store:Store<{counterStore:{counter:number}}>,
    private userStore:Store<{userStore:{name:string,permission:string,counter:number,loading:boolean}}>
  ){}
  counterVal!:number;
  data={
    counter:0,
    loading:false,
    permission:'Not Assigned',
    name:''
  }
  ngOnInit(): void {
    this.store.select('counterStore').subscribe(res=>{
      this.counterVal=res.counter
    });
    this.userStore.select('userStore').subscribe(user=>{
      this.data=user
    })
  }
  assign(){
    this.userStore.dispatch(AssignUser())
  }
  elevate(){
    this.userStore.dispatch(ElevateUser())
  }
  deletefn(){
    this.userStore.dispatch(DeleteUser())
  }
}
