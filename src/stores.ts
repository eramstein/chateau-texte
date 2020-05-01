import { get, writable } from "svelte/store";
import { GameState, initGameState } from "./engine/game";
import { handleKeyPress } from "./keybinds";
import { Screen, FullState } from "./ui/model";

export const State = createFullState();

function createFullState() {
    const initialState = getNewState();

    const { subscribe, set, update } = writable(initialState);

    return {
        subscribe,
        update,
        set,
        initialize: () => set(getNewState()),
        load: data => set(data),

        tempTest: () => update(s => { return s; }),

        //setRegion: (region) => update(s => { s.game.world.regions[region.name] = region; return s; }),
    
    };
}

function getNewState(): FullState {
    return {
        game: initGameState(),
        ui: {
            openScreen: Screen.Story,
            screenParameters: null,
        },
    };
}

export function loadState(): FullState {
    const savedData = localStorage.getItem("chateautexte") || "nope"
    if (!savedData || savedData === "undefined" || savedData === "nope") {
      return getNewState()
    } else {
      const parsedData = JSON.parse(savedData)
      return parsedData
    }
}
  
export function saveState() {
    const savedData = get(State);
    localStorage.setItem("chateautexte", JSON.stringify(savedData))
}

export function printState() {
    console.log(get(State));
}

export function resetState() {
    State.initialize();
    saveState();
}

export function tempTest() {
    State.tempTest();
}

window.onbeforeunload = () => {
    //saveState();
};

window.onkeypress = handleKeyPress;
