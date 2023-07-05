import { Team } from "../shared/models/team";

export const selectAppState = (state: {appState: Team[]}) => state.appState;