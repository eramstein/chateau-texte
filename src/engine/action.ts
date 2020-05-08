import { GameState } from "./game";
import { Narration, endNarration } from "./narration";

export interface Action {
    text: string;
    inputs?: InputType[];
    visibilityCondition?: any;
    effect: (gs : GameState, ...inputs) => void;
    effectDeferred?: (gs : GameState, ...inputs) => void;
    narration?: Narration;
    endsNarration?: boolean;
    oneTimeEffect?: boolean;
}

export enum InputType {
    TEXT = "text",
}

export function playAction(gs : GameState, action : Action, inputs) {
    action.effect(gs, inputs);
    if (action.endsNarration) {
        endNarration(gs, action.narration);
    }
    action.effectDeferred(gs, inputs);
    if (action.endsNarration) {
        removeAction(gs, action);
    }
}

export function addAction(gs : GameState, action : Action) {
    gs.actions.push(action);
}

export function removeAction(gs : GameState, action : Action) {
    gs.actions = gs.actions.filter(a => a !== action);
}