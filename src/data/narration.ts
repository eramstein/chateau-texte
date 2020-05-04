import { Narration } from "../engine/narration";
import { TEXT } from "./text";
import { InputType } from "../engine/action";

export const NAR : { [key:string]: Narration } = {
    Intro: {
        trigger: null,
        effect: null,
        visibilityCondition: null,
        visible: true,
        text: TEXT.Intro,
        actions: [{
            text: "Nommer le chateau",
            effect: (gs, inputs) => { gs.castle.name = inputs[0]; },
            inputs: [InputType.TEXT],
        }],
    }
}