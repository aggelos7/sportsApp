import { createReducer, on } from '@ngrx/store';
import { newTeamsList } from './app.actions';


const initialState = {
    teams: [],
}

export const appReducer = createReducer(
    initialState,
    on(newTeamsList, (state, {teams}) => ({...state, teams: teams})),
);