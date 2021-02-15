import {mock} from "./mock";

export const fetchOrdersList = () => {
    const response = mock;

    const data = response?.result;

    const { orders } = data;

    return orders;

}