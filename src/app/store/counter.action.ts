import { createAction,props } from "@ngrx/store";

export const incAct = createAction('incAct')
export const titleAct = createAction('titleAct')
export const customAct = createAction('custAct',props<{custAct:string,custCount:number}>())