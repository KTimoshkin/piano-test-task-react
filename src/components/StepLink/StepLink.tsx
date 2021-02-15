import React from 'react';

import cn from 'classnames';
import Style from './StepLink.module.sass';
import { Link } from 'react-router-dom';

interface IStepLink {
    title: string,
    step: number,
    type?: string,
}

const StepLink: React.FC<IStepLink> = ({
                      title,
                      step,
                      type = 'primary',
                  }) => (
    <Link
        className={cn(Style.stepLink, Style[type])}
        to={`/newOrder/${step}`}
    >
        {title}
    </Link>
)

export default StepLink;