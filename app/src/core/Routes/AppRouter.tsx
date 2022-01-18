import React, {useEffect} from "react"
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import {routesAuth} from "./routes.auth";
import {routesDefault} from "./routes.default";
import {RoutesConstants} from "./routes.constants";
import {message, Spin} from "antd";
import user from "../../store/user";
import {observer} from "mobx-react-lite";

const AppRouter: React.FC = () => {
    const history = useHistory()
    // const {error, loading, user} = useTypedSelector(
    //     (state) => state.token
    // );
    // const {getTokens, getUser} = useActions();

    useEffect(() => {
        user.getToken()
        console.log("user", user)
        if (user?.user) {
            history.push(RoutesConstants.PRODUCTS)
        }
    }, []);

    return (
        <Switch>
            {user && routesAuth.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}
            {routesDefault.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}

            <Redirect to={RoutesConstants.PRODUCTS}/>
        </Switch>
    );
}

export default observer(AppRouter);
