import React from 'react';
import {Layout} from 'antd';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./core/Routes/AppRouter";
import {observer} from "mobx-react-lite";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <AppRouter/>
            </Layout>
        </BrowserRouter>
    );
}

export default observer(App);
