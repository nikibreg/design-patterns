export interface IShopFacade extends IShop {
    discount: IShop;

}

export interface IShop {
    calc(value?: number): number;
}