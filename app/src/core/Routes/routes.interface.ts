import React, {ComponentType} from "react";
import {RoutesConstants} from "./routes.constants";
import {RouteComponentProps} from "react-router-dom";

export interface IRoutes {
    component: ComponentType<any> | ComponentType<RouteComponentProps<any>> | undefined,
    path: RoutesConstants,
}