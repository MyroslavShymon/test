import {makeAutoObservable} from "mobx";
import {IProduct} from "../../../store/types/products";
import {$host} from "../http";

export interface IBasketItems {
    productToBasketId: number,
    productId: number,
    basketId: number,
    count: number,
    product: IProduct
}

class Basket {
    public basketItems!: IBasketItems[];
    public totalPrice = 0

    constructor() {
        makeAutoObservable(this, {}, {deep: true});
    }

    async fetchBasketItems(id: string) {
        try {
            const response = await $host.get<IBasketItems[]>(`basket/${id}`)
            this.setBasketItems(response.data)
            // console.log()
            this.totalPrice = this.basketItems.reduce((prev, cur) => {
                return prev + Number(cur.product.cost) * cur.count
            }, 0)
        } catch (e) {
        }
    }

    async buy(id: string) {
        await $host.delete(`basket/${id}`)
    }

    async addToBasket(basketItem: { basketId: number, productId: number, count: string }) {
        try {
            await $host.post<IBasketItems[]>(`basket`, basketItem)
            // console.log(this.basketItems.reduce((prev, cur) => {
            //     return prev + Number(cur.product.cost) * cur.count
            // }, 0))
            console.log(this.basketItems)
            this.totalPrice = this.basketItems.reduce((prev, cur) => {
                return prev + Number(cur.product.cost) * cur.count
            }, 0)
        } catch (e) {
        }
    }

    setBasketItems = (basketItems: IBasketItems[]) => {
        this.basketItems = basketItems
    }

}

export default new Basket()
