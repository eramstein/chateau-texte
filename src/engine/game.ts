import { Character } from "./characters";
import { Time } from "./time";
import { Player } from "./player";
import { Castle } from "./castle";
import { Narration } from "./narration";
import { StoryLog } from "./story";
import { Action } from "./action";

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

    const initStory : StoryLog = { text: "Ponchour" };

    const initActions : Action[] = [{ text: "hoppla" }, { text: "eh yo" }];

    const gameState: GameState = {
        castle: initCastle,
        characters: [],
        story: [initStory],
        narrations: [],
        player: initPlayer,
        actions: initActions,
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
