import React, {useEffect, useState} from 'react';
import {IStep} from "./types";
import Style from "./Steps.module.sass";
import StepLink from "../../../components/StepLink";
import Form from "../../../components/Form";

export const Step4: React.FC<IStep> = ({ setAnswers }) => {
    const [isDisabled, setIsDisabled] = useState(true);

    const [points, setPoints] = useState('');

    useEffect(() => {
        if (points.length > 0) {
            setAnswers((prevState: any) => ({ ...prevState, points }))

            setIsDisabled(false)
        }
    }, [points])

    const inputsGroup = (
        <div className={Style.step4}>
            <p>Avalible pickup points</p>

            <div className={Style.step4__RadioGroup}>
                <input type="radio" name="points" onChange={() => setPoints('Variant 1')}/>
                <label>Variant 1</label>
            </div>

            <div className={Style.step4__RadioGroup}>
                <input type="radio" name="points" onChange={() => setPoints('Variant 2')}/>
                <label>Variant 2</label>
            </div>

            <div className={Style.step4__RadioGroup}>
                <input type="radio" name="points" onChange={() => setPoints('Variant 3')}/>
                <label>Variant 3</label>
            </div>

            <div className={Style.step4__RadioGroup}>
                <input type="radio" name="points" onChange={() => setPoints('Variant 4')}/>
                <label>Variant 4</label>
            </div>
        </div>
    );

    const buttonsGroup = (
        <>
            <StepLink title="Back" step={3} type="default" />
            <StepLink title="Next step" step={8} />
        </>
    );

    return (
        <Form
            heading="Add order"
            title="Pickup points"
            inputsGroup={inputsGroup}
            buttonsGroup={buttonsGroup}
        />
    )
}