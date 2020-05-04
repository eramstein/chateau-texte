import { Action } from "./action";

export interface Narration {
    text: string;
    actions: Action[];
    trigger : any;
    visible : boolean;
    visibilityCondition: any;
    effect : any;    
}
