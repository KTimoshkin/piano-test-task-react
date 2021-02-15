import React from 'react';
import { IStep } from './types';
import Style from "./Steps.module.sass";
import Form from "../../../components/Form";

export const Step10: React.FC<IStep> = () => {
    const contentGroup = (
        <div className={Style.finalStep}>
            <div>х</div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper eget lectus nisl eleifend ultrices faucibus. Adipiscing nisl, et commodo non id erat orci tellus pellentesque.
            </p>
        </div>
    );

    return (
        <Form
            heading="Failed to create order"
            contentGroup={contentGroup}
        />
    )
}