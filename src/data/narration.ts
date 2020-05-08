import { Narration, NarrationEndCondition, addNarration } from "../engine/narration";
import { TEXT } from "./text";
import { InputType } from "../engine/action";
import { addLog } from "../engine/story";
import { movePlayer } from "../engine/movement";

export const NAR : { [key:string]: Narration } = {
    Intro: {
        trigger: null,
        effect: null,
        visibilityCondition: null,
        visible: true,
        text: TEXT.Intro,
        actions: [{
            text: "Pour commencer, comment vais-je l'appeler?",
            effect: (gs, inputs) => {
                gs.regions[0].name = inputs[0];
            },
            effectDeferred: (gs, inputs) => {
                addLog(gs, "A partir d'aujourd'hui, ce domaine sera connus sous le nom de " + inputs[0]);
                addNarration(gs, NAR.InitExploration);
            },
            inputs: [InputType.TEXT],
            endsNarration: true,
        }],
    },
    InitExploration: {
        trigger: null,
        effect: null,
        visibilityCondition: null,
        visible: true,
        text: TEXT.InitExploration,
        actions: [{
            text: "Voir le donjon",
            effect: (gs) => {
                movePlayer(gs, 1);
            },
        }, {
            text: "Voir la forêt",
            effect: (gs) => {
                movePlayer(gs, 2);
            },
        }],
        endsOn: { type: NarrationEndCondition.ACTION },
    }
}