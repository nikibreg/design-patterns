export interface IShopFacade {
    discount: ShopFacadeSubclass;

}

export interface ShopFacadeSubclass {
    calc(value?: number): number;
}