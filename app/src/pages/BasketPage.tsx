import React, {FunctionComponent, useEffect} from 'react';
import MainTemplate from "../templates/MainTemplate";
import {Button, Card, Input} from "antd";
import {API_URL} from "../http";
import Meta from "antd/es/card/Meta";
import basket, {IBasketItems} from "../store/basket";
import user from "../store/user";
import {observer} from "mobx-react-lite";
import Title from "antd/es/typography/Title";
import {useHistory} from "react-router-dom";
import {RoutesConstants} from "../core/Routes/routes.constants";

interface OwnProps {
}

type Props = OwnProps;

const MyComponent: FunctionComponent<Props> = (props) => {
    const history = useHistory()
    useEffect(() => {
        console.log(user.user?.id)
        basket.fetchBasketItems(String(user.user?.id))
        console.log(basket?.basketItems)
    }, []);

    return (
        <MainTemplate>
            <Title style={{marginTop: 20}}>Сторінка корзини</Title>

            {basket?.basketItems?.map((product: IBasketItems) =>
                <Card
                    key={product.product.image}
                    style={{width: 300}}
                    cover={
                        <img
                            alt="example"
                            src={API_URL + product?.product.image}
                        />
                    }
                    actions={[
                        <Input type={"number"} placeholder="Кіоткість" defaultValue={product.count}
                               onChange={(event) => {
                                   product.count = Number(event.target.value)
                                   basket.addToBasket({
                                       basketId: product.basketId,
                                       productId: product.productId,
                                       count: event.target.value
                                   })
                               }}
                        />
                        // <Button onClick={async () => {
                        //     await axios.post(
                        //         API_URL + "api/basket", {basketId: 1, productId: product.id, count: 1}
                        //     );
                        // }}>Замовити</Button>,
                    ]}
                >
                    <Meta
                        title={product.product.title}
                        description={<div>Опис: {product.product.description} <br/> Ціна: {product.product.cost} грн
                            <br/> Кількість: {product.count}</div>}
                    />
                </Card>
            )}
            <Button onClick={() => {
                history.push(RoutesConstants.PRODUCTS)
                basket.buy(String(user.user?.id))
            }}>Купити</Button>
        </MainTemplate>
    );
};

export default observer(MyComponent);
