import React from 'react';

import cn from 'classnames';
import Style from './Button.module.sass'

interface IButton {
    title: string,
    onClick: (event: any) => void
    type?: string,
    disabled?: boolean,
}

const Button: React.FC<IButton> = ({
                                       title,
                                       onClick,
                                       type = 'primary',
                                       disabled = false,
                                       ...rest
                                   }) => (
    <button
        className={cn(Style.button, Style[type], disabled && Style.disabled)}
        onClick={onClick}
    >
        {title}
    </button>
);

export default Button;