import { GameState } from "../engine/game";

export enum Screen {
    Story = "STORY",
}

export interface UI {
    openScreen: Screen;
    screenParameters: any;
}

export interface FullState {
    game: GameState;
    ui: UI;
}
