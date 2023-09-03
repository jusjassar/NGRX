import { Action, createReducer, on } from "@ngrx/store"
import { initCounterState } from "./counter.state"
import { addFuncAction, reset, subsFuncAction } from "./counter.actions"
import { state } from "@angular/animations"

export const myReducer = createReducer(initCounterState,on(addFuncAction,(state)=>{
    return {
        ...state,
        counter:state.counter+1
    }
}),
on(subsFuncAction,(state)=>{
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
export function myReducerFunc(counterStatetate: { counter: number } | undefined,action: Action){
    return myReducer(counterStatetate,action)
}