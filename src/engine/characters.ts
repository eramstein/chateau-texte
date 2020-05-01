import { HealthStatus, getDefaultHealthStatus } from "./health";
import { Needs, getDefaultNeeds } from "./needs";
import { GameState } from "./game";

export interface Character {
    name: string;
    position: Position;
    health: HealthStatus;
    needs: Needs;
}

export function updateCharacters(gs: GameState) {
    Object.values(gs.characters).forEach(char => {
        updateCharacter(gs, char);
    });
}

export function updateCharacter(gs: GameState, char: Character) {
    char.needs.hunger++;
}

export function makeCharacter(gs: GameState): Character {
    return {
        name: "bibi " + Math.floor(Math.random() * 100000),
        position: null,
        health: getDefaultHealthStatus(),
        needs: getDefaultNeeds(),
    };
}
