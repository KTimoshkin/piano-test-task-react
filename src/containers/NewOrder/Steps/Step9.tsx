import React from 'react';
import { IStep } from './types';
import Style from "./Steps.module.sass";
import Form from "../../../components/Form";

export const Step9: React.FC<IStep> = () => {
    const contentGroup = (
        <div className={Style.finalStep}>
            <div>✓</div>

            <p>
                Your order has been created successfully!
            </p>
        </div>
    );

    return (
        <Form
            heading="Order created"
            contentGroup={contentGroup}
        />
    )
}