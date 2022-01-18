import {IRoutes} from "./routes.interface";
import {RoutesConstants} from "./routes.constants";
import ProductsPage from "../../pages/ProductsPage";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";

export const routesDefault: IRoutes[] = [
    {
        component: LoginPage,
        path: RoutesConstants.LOGIN
    },
    {
        component: ProductsPage,
        path: RoutesConstants.PRODUCTS
    },
    {
        component: RegistrationPage,
        path: RoutesConstants.REGISTRATION
    },
]
