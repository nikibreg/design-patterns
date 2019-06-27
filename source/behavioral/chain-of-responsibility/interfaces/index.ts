export interface Handler {
    setNext?: (fn: Handler) => void;
    exec?: (products: Array<number>) => number;
    next?: Handler | null;
}
