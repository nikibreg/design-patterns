import { Jedi } from "..";

export interface ISoldier {
    level: number;
    attack(): number;
}

export interface IJediAdapter {
    attack(): number;
    jedi: Jedi;
}