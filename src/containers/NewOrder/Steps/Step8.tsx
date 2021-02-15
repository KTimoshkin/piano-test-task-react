import React, {useState} from 'react';
import { IStep } from './types';

import Button from "../../../components/Button";
import Form from "../../../components/Form";

import Style from "./Steps.module.sass";
import Cols from '../../Orders/Orders.module.sass';
import Api from '../../../api';
import { Redirect } from 'react-router-dom';
import StepLink from '../../../components/StepLink';

export const Step8: React.FC<IStep> = ({ answersData }) => {
    const [isRedirect, setIsRedirect] = useState(false)
    const [nextStep, setNextStep] = useState(0)

    const createNewOrder = async () => {
        const response = await Api.createOrder(answersData);

        if (response) {
            if (Object.keys(response).length !== 0) {
                setNextStep(9)
                setIsRedirect(true)
            }  else {
                setNextStep (10)
                setIsRedirect(true)
            }
        }
    }

    const contentGroup = (
        <div className={Style.step8}>
            <div className={Style.step8__Title}>
                <p className={Cols.col__1}>Personal info</p>
                <p className={Cols.col__2}>{answersData?.firstName} {answersData?.secondName}</p>
            </div>

            <div className={Style.step8__Title}>
                <p className={Cols.col__1}>Delivety option</p>
                <p className={Cols.col__2}>{answersData?.delivery}</p>
            </div>

            <div className={Style.step8__Title}>
                <p className={Cols.col__1}>Pickup point</p>
                <p className={Cols.col__2}>{answersData?.points}</p>
            </div>
        </div>
    );

    const buttonsGroup = (
        <>
            <StepLink title="Back" step={4} type="default" />
            <Button title="Submit" onClick={() => createNewOrder()} />
        </>
    );

    return (
        <>
            {isRedirect && <Redirect to={`/newOrder/${nextStep}`} />}

            <Form
                heading="Add order"
                title="Confirm order"
                contentGroup={contentGroup}
                buttonsGroup={buttonsGroup}
            />
        </>
    )
}