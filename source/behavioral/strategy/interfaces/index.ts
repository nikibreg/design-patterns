export type Strategy = (amount: number) => number; 
export interface Context {
    checkout(): number;
    setAmount(amount: number): void;
}