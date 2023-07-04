import { createAction, props } from "@ngrx/store";
import { Team } from "../shared/models/team";

export const newTeamsList = createAction(
    '[App] TeamsList',
    props<{teams: Team[]}>(),
);