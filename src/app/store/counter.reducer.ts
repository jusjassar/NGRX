import { createReducer, on } from "@ngrx/store";
import { incrementCountAct, titleAct } from "./counter.action";
import { initCounterState } from "./counter.state";

export const counterReducer = createReducer(initCounterState,on(incrementCountAct,(state)=>{
    return{
        ...state,
        counter:state.counter+1
    }
}),
on(titleAct,(state)=>{
    return{
        ...state,
        title:'Changed Counter Tile'
    }
}))