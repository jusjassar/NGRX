import { createReducer,on } from "@ngrx/store"
import { decreament, increament,reset } from "./counter.action"
import { initialState } from "./counter.state"
import { AssignUser, DeleteUser, ElevateUser } from "./user.action";



const _counterReducer=createReducer(initialState,on(increament,(state)=>{
    return{
        ...state,
        counter:state.counter + 1
    }
}),
on(decreament,(state)=>{
    return{
        ...state,
        counter:state.counter - 1
    }
}),
on(reset,(state)=>{
    return{
        ...state,
        counter:0
    }
}));

export function counterReducer(state:any,action:any){
    return _counterReducer(state,action)
}
const  midState={
    counter:0,
    loading:false,
    permission:'Not Assigned',
    name:'Frank'
}
export const myReducer = createReducer(midState,on(AssignUser,(data)=>{
    return{
        ...data,
        name:'Debbie',
        permission:'Assign Only'
    }
}),
on(ElevateUser,(state44)=>{
    return{
        ...state44,
        permission:'Assign and Operate'
    }
}),
on(DeleteUser,(state88)=>{
    return{
        counter:0,
        loading:false,
        permission:'',
        name:''
    }
}));