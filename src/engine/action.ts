import { GameState } from "./game";

export interface Action {
    text: string;
    inputs?: InputType[];
    effect: (gs : GameState, ...inputs) => void;
}

export enum InputType {
    TEXT = "text",
}