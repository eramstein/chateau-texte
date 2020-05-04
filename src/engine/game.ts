import { Character } from "./characters";
import { Time } from "./time";
import { Player } from "./player";
import { Castle } from "./castle";
import { Narration } from "./narration";
import { StoryLog } from "./story";
import { Action } from "./action";
import { TEXT } from "../data/text";
import { NAR } from "../data/narration";

export interface GameState {
    castle: Castle;
    characters: Character[];
    time: Time;
    player: Player;
    narrations: Narration[];
    story: StoryLog[];
    actions: Action[];
}

export function initGameState(): GameState {

    const initCastle : Castle = {
        name: "Ramstein",
        places: [
            {
                name: "Rivière",
                description: "mouillée",
                containers: [],
                items: [],
                adjacentPlaces: [{ placeIndex: 1, distance: 100 }],
            },
            {
                name: "Donjon",
                description: "solide",
                containers: [],
                items: [],
                adjacentPlaces: [{ placeIndex: 0, distance: 100 }],
            },
        ],
    };

    const initPlayer : Player = {
        place: 0,
    };

    const gameState: GameState = {
        castle: initCastle,
        characters: [],
        story: [],
        narrations: [NAR.Intro],
        player: initPlayer,
        actions: NAR.Intro.actions,
        time: {
            year: 1,
            season: 1,
            day: 1,
            hour: 12,
            minute: 0,
            second: 0,
        },
    };

    return gameState;
}
