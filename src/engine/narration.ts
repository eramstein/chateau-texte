import { Action, addAction } from "./action";
import { GameState } from "./game";
import { addLog } from "./story";

export interface Narration {
    text: string;
    actions: Action[];
    trigger : any;
    visible : boolean;
    visibilityCondition: any;
    effect : any;
    endsOn?: {
        type: NarrationEndCondition;
        endTime?: number;
        stateCondition?: any;
    }
}

export enum NarrationEndCondition {
    ACTION = "action",
    TIME = "time",
    STATE = "state",
}

export function addNarration(gs : GameState, narration : Narration) {
    gs.narrations.push(narration);
    narration.actions.forEach(action => {
        action.narration = narration;
        if (!action.visibilityCondition) {
            addAction(gs, action);
        }
    });
}

export function endNarration(gs : GameState, narration : Narration) {
    addLog(gs, narration.text);
    gs.narrations = gs.narrations.filter(n => n !== narration);
}