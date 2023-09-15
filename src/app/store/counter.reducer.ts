import { createReducer, on } from "@ngrx/store";
import { iniCounterState } from "./counter.state";
import { customAct, incAct, titleAct } from "./counter.action";

export const counterAppReducer = createReducer(iniCounterState,on(incAct,(state)=>{
    return{
        ...state,
        counter:state.counter+1
    }
}),
on(titleAct,(state)=>{
    return{
        ...state,
        title:'Changed Title'
    }
}),
on(customAct,(state,action)=>{
    return{
        ...state,
        counter:action.custAct !== 'reset'?
        action.custAct === 'add'? 
        state.counter + action.custCount : 
        state.counter - action.custCount : 
        0
    }
}))