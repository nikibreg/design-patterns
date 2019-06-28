export interface Visitor {
    visit(e: IElement, v?: number): void;
}

export interface IElement {
    accept(v: Function): void;
}