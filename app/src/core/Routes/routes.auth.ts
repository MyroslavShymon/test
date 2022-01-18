import {IRoutes} from "./routes.interface";
import ProductsPage from "../../pages/ProductsPage";
import {RoutesConstants} from "./routes.constants";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";
import BasketPage from "../../pages/BasketPage";

export const routesAuth: IRoutes[] = [
    {
        component: LoginPage,
        path: RoutesConstants.LOGIN
    },
    {
        component: ProductsPage,
        path: RoutesConstants.PRODUCTS
    },
    {
        component: BasketPage,
        path: RoutesConstants.BASKET
    },
    {
        component: RegistrationPage,
        path: RoutesConstants.REGISTRATION
    },
]
