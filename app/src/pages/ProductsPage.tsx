import * as React from "react"
import {Button, Card, Image, message, Space, Spin} from "antd";
import MainTemplate from "../templates/MainTemplate";
import Meta from "antd/es/card/Meta";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {RoutesConstants} from "../core/Routes/routes.constants";
import axios from "axios";
import Title from "antd/es/typography/Title";
import products, {IProduct} from "../store/products";
import {API_URL} from "../http";
import {observer} from "mobx-react-lite";
import user from "../store/user";

interface ProductsPageProps {

}

const ProductsPage: React.FC<ProductsPageProps> = () => {
    const history = useHistory()

    useEffect(() => {
        products.fetchProducts()
    }, []);

    // const showProductPage = (id: string) => {
    //     history.push(`${RoutesConstants.ANIMES}/${id}`);
    // }
    return (
        <MainTemplate>
            <Title style={{marginTop: 20}}>Product list</Title>
            <Space
                direction={"horizontal"}
                wrap={true}
                align={"center"}
                style={{justifyContent: "space-evenly", marginTop: 20}}
            >
                {products?.products?.map((product: IProduct) =>
                    <Card
                        key={product.id}
                        style={{width: 300}}
                        cover={
                            <img
                                alt="example"
                                src={API_URL + product?.image}
                            />
                        }
                        actions={[
                            <Button onClick={async () => {
                                await axios.post(
                                    API_URL + "api/basket", {basketId: user?.user?.id, productId: product.id, count: 1}
                                );
                            }}>Замовити</Button>,
                        ]}
                    >
                        <Meta
                            title={product.title}
                            description={<div>Опис: {product.description} <br/> Ціна: {product.cost} грн </div>}
                        />
                    </Card>
                )}
            </Space>
        </MainTemplate>
    );
}

export default observer(ProductsPage);
