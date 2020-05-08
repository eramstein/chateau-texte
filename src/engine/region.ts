import { Item } from "./items";

export interface Region {
    name: string;
    places: Place[];
}

export interface Place {
    name: string;
    description: string;
    containers: Container[];
    items: Item[];
    adjacentPlaces: AdjacentPlace[];
}

export interface Container {
    name: string;
    description: string;
    items: Item[];
}

export interface AdjacentPlace {
    placeIndex: number;
    distance: number;
}