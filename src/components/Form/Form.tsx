import React from 'react';
import Style from './Form.module.sass'
import {Link} from "react-router-dom";

interface IForm {
    heading: string,
    title?: string,
    contentGroup?: React.ReactNode,
    inputsGroup?: React.ReactNode,
    buttonsGroup?: React.ReactNode,
}

const Form: React.FC<IForm> = ({heading, title, contentGroup, inputsGroup, buttonsGroup}) => (
    <div className={Style.form}>
        <div className={Style.form__CloseButton}>
            <Link to={`/`}>x</Link>
        </div>

        <div className={Style.form__Header}>
            <p>{heading}</p>
            {title && (
                <small>{title}</small>
            )}
        </div>

        {contentGroup && (
            <div className={Style.form__Content}>
                {contentGroup}
            </div>
        )}

        {inputsGroup && (
            <div className={Style.form__InputsGroup}>
                {inputsGroup}
            </div>
        )}

        {buttonsGroup && (
            <div className={Style.form__ButtonsGroup}>
                {buttonsGroup}
            </div>
        )}
    </div>
);

export default Form;