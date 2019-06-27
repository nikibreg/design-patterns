export interface IMemento {
    // getName(): any;
    // getSnapshotData(): any;
}
export interface Snapshot { 
    value: string;
}

export interface IOriginator {
    store(val: string): Snapshot;
    restore(memento: Snapshot): string;
}