import React, {useEffect, useState} from 'react';
import StepLink from "../../../components/StepLink";
import Form from "../../../components/Form";

import Style from './Steps.module.sass';
import { IStep } from './types';

export const Step3: React.FC<IStep> = ({ setAnswers }) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [nextStep, setNextStep] = useState(3);

    const [delivery, setDelivery] = useState('');

    useEffect(() => {
        if (delivery.length > 0) {
            setIsDisabled(false)

            setAnswers((prevState: any) => ({ ...prevState, delivery }))

            if (delivery === 'Courier point') {
                setNextStep(4)
            }

            if (delivery === 'Pickup point') {
                setNextStep(5)
            }
        }
    }, [delivery])

    const inputsGroup = (
        <div className={Style.step3}>
            <p>Delivery options</p>

            <div className={Style.step3__RadioGroup}>
                <input type="radio" name="delivery" onChange={() => setDelivery('Courier point')}/>
                <label>Courier delivery</label>
            </div>

            <div className={Style.step3__RadioGroup}>
                <input type="radio" name="delivery" onChange={() => setDelivery('Pickup point')}/>
                <label>Pickup point</label>
            </div>
        </div>
    );

    const buttonsGroup = (
        <>
            <StepLink title="Back" step={2} type="default" />
            <StepLink title="Next step" step={nextStep}/>
        </>
    );

    return (
        <Form
            heading="Add order"
            title="Delivery options"
            inputsGroup={inputsGroup}
            buttonsGroup={buttonsGroup}
        />
    )
}