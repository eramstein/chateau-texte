import { GameState } from "./game";

export interface StoryLog {
    text: string;
}

export function addLog(gs : GameState, text : string) {
    gs.story.push({ text });
}