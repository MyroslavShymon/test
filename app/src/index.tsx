import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.less';
import App from './App';
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

