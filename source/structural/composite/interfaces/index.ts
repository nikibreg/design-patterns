export interface IEquipment {
    name: string;
    price: number;
    getPrice(): number;
    getName(): string;
    setName(name: string): void;
}

