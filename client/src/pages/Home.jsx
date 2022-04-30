import React, {useState} from "react";

import {MultiStepForm, Step} from "react-multi-form";
import ProjectInformation from "../components/ProjectInformation";
import LesseeInformation from "../components/LesseeInformation";
import ReputationInformation from "../components/ReputationInformation";
import BalanceSheetInformation from "../components/BalanceSheetInformation";
import BaseForm from "../components/BaseForm";
import '../components/mainForm.css'
import ProfitAndLoseInformation from "../components/ProfitAndLoseInformation";

function Home() {

    const [active, setActive] = useState(1)
    const [data, setData] = useState({})

    const handleSubmitForm = (event, newData) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setData(newData);
            console.log(data)
            setActive(prevState => prevState + 1)
        }
    };

    const previousButtonClick = (activeForm) => {
        setActive(activeForm);
    }

    return (
        <div className="mainForm">
            <h1 style={{textAlign: 'center'}}>Оценка кредитоспособности</h1>
            <MultiStepForm activeStep={active}>
                <Step label="Проект">
                    <BaseForm
                        FormItem={ProjectInformation}
                        previousData={data}
                        handleSubmitForm={handleSubmitForm}
                    />
                </Step>
                <Step label="Лизингополучатель">
                    <BaseForm
                        FormItem={LesseeInformation}
                        previousData={data}
                        handleSubmitForm={handleSubmitForm}
                        handlePreviousFormButtonClick={previousButtonClick}
                    />
                </Step>
                <Step label="Деловая репутация">
                    <BaseForm
                        FormItem={ReputationInformation}
                        previousData={data}
                        handleSubmitForm={handleSubmitForm}
                        handlePreviousFormButtonClick={previousButtonClick}
                    />
                </Step>
                <Step label="Финансовое положение">
                    <BaseForm
                        FormItem={BalanceSheetInformation}
                        previousData={data}
                        handleSubmitForm={handleSubmitForm}
                        handlePreviousFormButtonClick={previousButtonClick}
                    />
                </Step>
                <Step label="Прибыли и убытки">
                    <BaseForm
                        FormItem={ProfitAndLoseInformation}
                        previousData={data}
                        handleSubmitForm={handleSubmitForm}
                        handlePreviousFormButtonClick={previousButtonClick}
                    />
                </Step>
                <Step label="Подтверждение">
                    <p>В данный момент отправка данных не доступна</p>
                </Step>
            </MultiStepForm>
        </div>
    )
}

export default Home