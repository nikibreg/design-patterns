export interface IInk {
    type: TInk
    get(): TInk;
}

export interface IPrinter {
    ink: IInk
}

export type TInk = "acrylic-based" | "alcohol-based"  