import React from 'react';
import { Route } from 'react-router-dom';

import OrderPage from "./Orders";
import NewOrderPage from "./NewOrder";

const MainRoute = () => (
    <>
        <Route
            path="/"
            exact
            render={() => (<OrderPage />)}
        />
        <Route
            path="/newOrder/:id"
            render={() => (<NewOrderPage />)}
        />
    </>
)

export default MainRoute;