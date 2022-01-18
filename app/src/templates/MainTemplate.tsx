import * as React from "react"
import {Content, Header} from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import {Col, Row, Button} from "antd";
import {useHistory} from "react-router-dom";
import {RoutesConstants} from "../core/Routes/routes.constants";
import user from "../store/user";
import basket from "../store/basket";
import {observer} from "mobx-react-lite";

interface MainTemplateProps {
    children?: React.ReactNode
}

const MainTemplate: React.FC<MainTemplateProps> = ({children}) => {
    const history = useHistory();

    return (
        <>
            <Header>
                <Row>
                    <Col span={12}>
                        <Title className="logo" onClick={() => history.push(RoutesConstants.PRODUCTS)}>
                            Test task store
                        </Title>
                    </Col>
                    <Col span={4}>
                        Email: {user?.user?.email} &nbsp;
                        Ціна: {basket.totalPrice} грн
                    </Col>
                    <Col span={3}>
                        <Button type="primary" className={"login-button"}
                                onClick={() => history.push(RoutesConstants.BASKET)}>Корзина</Button>
                    </Col>
                    <Col span={3}>
                        <Button type="primary" className={"login-button"} onClick={() => {
                            history.push(RoutesConstants.REGISTRATION)
                            user.logout()
                        }}>Вийти</Button>
                    </Col>
                </Row>
            </Header>
            <Content style={{minHeight: "100vh"}} className="main-template">{children}</Content>
        </>
    );
}

export default observer(MainTemplate);
