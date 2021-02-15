import React from 'react';

import Style from './Orders.module.sass';

interface IOrdersItem {
    name: string,
    description: string,
}

export const OrdersItem: React.FC<IOrdersItem> = ({ name, description}) => (
    <div className={Style.order}>
        <div className={Style.col__1}>{name}</div>
        <div className={Style.col__2}>{description}</div>
    </div>
)