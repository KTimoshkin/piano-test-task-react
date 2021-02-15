import React, {useEffect, useState} from 'react';

import { fetchOrdersList } from './Orders.async';

import { OrdersItem } from './Orders.item';
import { Link } from 'react-router-dom';

import Style from './Orders.module.sass'

interface IOrder {
    id: number,
    orderName: string,
    orderDescription: string,
}

const Orders = () => {
    const [ordersData, setOrdersData] = useState([]);

    useEffect(() => {
        const response: any = fetchOrdersList();

        setOrdersData(response)
    },[])

    return (
        <div className={Style.orders}>
            <header>
                <div className={Style.logo}>
                    Orders
                </div>

                <div className={Style.addOrder}>
                    <Link to={`/newOrder/1`}>Add order +</Link>
                </div>
            </header>

            <div className={Style.orders__Content}>
                <div className={Style.orders__ContentHeader}>
                    <div className={Style.col__1}>Name</div>
                    <div className={Style.col__2}>Description</div>
                </div>

                {ordersData && ordersData.map((order: IOrder) => (
                        <OrdersItem
                            key={order?.id}
                            name={order?.orderName}
                            description={order?.orderDescription}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default Orders;