import {makeAutoObservable} from "mobx";
import {$host} from "../http";

export interface IProduct {
    id: number,
    title: string,
    description: string,
    cost: string,
    image: string
}

class Products {
    public products!: IProduct[];

    constructor() {
        makeAutoObservable(this, {}, {deep: true});
    }

    public async fetchProducts() {
        try {
            const response = await $host.get<IProduct[]>("product")
            this.setProducts(response.data)
        } catch (e) {
        }
    }

    setProducts = (products: IProduct[]) => {
        this.products = products
    }
}


export default new Products();
