export interface IColor {
    name: string;
}

export type TColors = { 
    [color: string]: IColor
};

export interface IColorFactory {
    colors: TColors;
}