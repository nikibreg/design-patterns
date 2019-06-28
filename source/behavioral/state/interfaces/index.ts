export interface IState { 
    name: string;
    nextStatus: IState;
    next(): IState;
}