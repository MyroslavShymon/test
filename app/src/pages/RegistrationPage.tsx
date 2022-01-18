import React, {FunctionComponent, useState} from "react";
import {useHistory} from "react-router-dom";
import {RoutesConstants} from "../core/Routes/routes.constants";
import {Content} from "antd/es/layout/layout";
import {Button, Col, Input, message, Row} from "antd";
import Title from "antd/es/typography/Title";
import {KeyOutlined, UserOutlined} from "@ant-design/icons";
import {observer} from "mobx-react-lite";
import user from "../store/user";

interface OwnProps {
}

type Props = OwnProps;

const RegistrationPage: FunctionComponent<Props> = (props) => {
    const history = useHistory()
    const [userState, setUser] = useState({
        name: '',
        password: '',
        email: '',
        mobile: ''
    });

    const register = async () => {
        await user?.registration(userState)
        if (user?.response) {
            message.error(user?.response);
            user?.setResponse(null)
        } else
            history.push(RoutesConstants.PRODUCTS)
    }
    return (
        <Content>
            <Row align={"top"} justify={"center"} style={{minHeight: "100vh"}}>
                <Col span={7} style={{marginTop: 270}}>
                    <Row justify={"center"}>
                        <Title>Store test task</Title>
                    </Row>
                    <Row justify={"center"}>
                        <Input
                            size="large"
                            placeholder="Username"
                            prefix={<UserOutlined/>}
                            value={userState.name}
                            onChange={
                                (event) =>
                                    setUser(prevState =>
                                        ({...prevState, name: event.target.value})
                                    )
                            }
                        />
                    </Row>
                    <Row justify={"center"}>
                        <Input
                            size="large"
                            placeholder="Mobile"
                            prefix={<UserOutlined/>}
                            value={userState.mobile}
                            onChange={
                                (event) =>
                                    setUser(prevState =>
                                        ({...prevState, mobile: event.target.value})
                                    )
                            }
                        />
                    </Row>
                    <Row justify={"center"}>
                        <Input
                            size="large"
                            placeholder="Email"
                            prefix={<UserOutlined/>}
                            value={userState.email}
                            onChange={
                                (event) =>
                                    setUser(prevState =>
                                        ({...prevState, email: event.target.value})
                                    )
                            }
                        />
                    </Row>
                    <Row justify={"center"} style={{marginTop: 10}}>
                        <Input
                            size="large"
                            placeholder="Password"
                            type={"password"}
                            prefix={<KeyOutlined/>}
                            value={userState.password}
                            onChange={
                                (event) =>
                                    setUser(prevState =>
                                        ({...prevState, password: event.target.value})
                                    )
                            }
                        />
                    </Row>
                    <Row justify={"center"} style={{marginTop: 10}}>
                        <Col span={12}>
                            <Button type="primary" size={"large"} onClick={register}>Реєстрація</Button>
                        </Col>
                        <Col span={12}>
                            <Button type="primary" size={"large"}
                                    onClick={() => history.push(RoutesConstants.LOGIN)}>Вже маєте
                                аккаунт?</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Content>
    );
};

export default observer(RegistrationPage);
