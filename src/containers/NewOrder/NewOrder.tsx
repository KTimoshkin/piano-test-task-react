import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';
import { Step4 } from './Steps/Step4';
import { Step8 } from "./Steps/Step8";
import { Step9 } from './Steps/Step9';
import { Step10 } from './Steps/Step10';

const NewOrder = () => {
    const [answersData, setAnswers] = useState({});

    return (
        <Switch>
            <Route path="/newOrder/1">
                <Step1 setAnswers={setAnswers}/>
            </Route>
            <Route path="/newOrder/2">
                <Step2 setAnswers={setAnswers}/>
            </Route>
            <Route path="/newOrder/3">
                <Step3 setAnswers={setAnswers}/>
            </Route>
            <Route path="/newOrder/4">
                <Step4 setAnswers={setAnswers}/>
            </Route>
            <Route path="/newOrder/8">
                <Step8 answersData={answersData} setAnswers={setAnswers}/>
            </Route>
            <Route path="/newOrder/9">
                <Step9 setAnswers={setAnswers}/>
            </Route>
            <Route path="/newOrder/10">
                <Step10 setAnswers={setAnswers}/>
            </Route>
        </Switch>
    )
};

export default NewOrder;