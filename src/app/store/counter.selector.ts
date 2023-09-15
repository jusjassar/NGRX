import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterStateModel } from "./counter.model";

const getcounterstate=createFeatureSelector<CounterStateModel>('myCountStore');

export const getcounter=createSelector(getcounterstate,(state)=>{
    return state.counter
})
export const gettitle=createSelector(getcounterstate,(state)=>{
    return state.title
})