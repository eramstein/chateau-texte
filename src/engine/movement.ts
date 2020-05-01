import { GameState } from "./game";

export function movePlayer(gs : GameState, placeIndex : number) {
    gs.player.place = placeIndex;
}