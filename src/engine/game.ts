import { Character } from "./characters";
import { Time } from "./time";
import { Player } from "./player";
import { Region } from "./region";
import { Narration, addNarration } from "./narration";
import { StoryLog } from "./story";
import { Action } from "./action";
import { TEXT } from "../data/text";
import { NAR } from "../data/narration";

export interface GameState {
    regions: Region[];
    characters: Character[];
    time: Time;
    player: Player;
    narrations: Narration[];
    story: StoryLog[];
    actions: Action[];
}

export function initGameState(): GameState {

    const initCastle : Region = {
        name: "",
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
        region: 0,
        place: 0,
    };

    const gameState: GameState = {
        regions: [initCastle],
        characters: [],
        story: [],
        narrations: [],
        player: initPlayer,
        actions: [],
        time: {
            year: 1,
            season: 1,
            day: 1,
            hour: 12,
            minute: 0,
            second: 0,
        },
    };

    addNarration(gameState, NAR.Intro);

    return gameState;
}
