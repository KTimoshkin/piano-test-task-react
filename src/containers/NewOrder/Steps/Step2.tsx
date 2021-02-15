import React, {useState, useEffect} from 'react';
import StepLink from "../../../components/StepLink";
import Form from "../../../components/Form";

import Style from './Steps.module.sass';
import {IStep} from './types';

export const Step2: React.FC<IStep> = ({ setAnswers }) => {
    const [isDisabled, setIsDisabled] = useState(true);

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');

    useEffect(() => {
        if (firstName.length > 0 && secondName.length > 0) {
            setAnswers((prevState: any) => ({
                    ...prevState,
                    firstName,
                    secondName,
                }))
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [firstName, secondName]);

    const inputsGroup = (
        <div className={Style.step2}>
            <p>First name</p>
            <input type="text" value={firstName} onChange={(val) => setFirstName(val.target.value)}/>

            <p>Second name</p>
            <input type="text" value={secondName} onChange={(val) => setSecondName(val.target.value)}/>
        </div>
    );

    const buttonsGroup = (
        <>
            <StepLink title="Back" step={1} type="default" />
            <StepLink title="Next step" step={3} />
        </>
    );

    return (
        <Form
            heading="Add order"
            title="Personal information"
            inputsGroup={inputsGroup}
            buttonsGroup={buttonsGroup}
        />
    )
}