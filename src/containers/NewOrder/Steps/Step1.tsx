import React, {useState} from 'react';
import Form from "../../../components/Form";

import Style from './Steps.module.sass';
import { IStep } from './types';
import StepLink from "../../../components/StepLink";

export const Step1: React.FC<IStep> = ({ setAnswers }) => {
    const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (event: any) => {
        const data = {
            isAccept: event.currentTarget.checked
        }

        setAnswers((prevState: any) => ({...prevState, ...data}))
        setIsDisabled(!isDisabled)
    }

    const contentGroup = (
        <div className={Style.step1}>
            <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
            <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
            <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
        </div>
    );

    const inputsGroup = (
        <div className={Style.step1__Input}>
            <input type="checkbox" onChange={handleChange}/>
            I accept the terms of delivery
        </div>
    );

    const buttonsGroup = (
        <>
            <StepLink title="Back" step={1} type="default" />
            <StepLink title="Next step" step={2} />
        </>
    );

    return (
        <Form
            heading="Add order"
            title="Terms of delivery"
            contentGroup={contentGroup}
            inputsGroup={inputsGroup}
            buttonsGroup={buttonsGroup}
        />
    )
}