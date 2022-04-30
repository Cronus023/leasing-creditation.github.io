import React, {useState} from "react";

import {Form} from 'react-bootstrap';
import ButtonMenu from "./ButtonMenu";

function LesseeInformation({handleDataSubmit, previousData, handlePreviousFormButtonClick}) {

    const [companyName, setCompanyName] = useState("");
    const [workAge, setWorkAge] = useState(0);
    const [industry, setIndustry] = useState("");
    const [advancePayment, setAdvancePayment] = useState("");

    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value);
    }

    const handleWorkAgeChange = (event) => {
        setWorkAge(event.target.value);
    }

    const handleIndustryChange = (event) => {
        setIndustry(event.target.value);
    }

    const handleAdvancePaymentChange = (event) => {
        setAdvancePayment(event.target.value);
    }

    const handleSubmit = () => {
        previousData["lesseeInformation"] = {
            companyName,
            workAge,
            industry,
            advancePayment,
        };
        handleDataSubmit(previousData);
    };

    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Сведения о лизингополучателе</h3>
            <Form.Group>
                <Form.Label>Наименование организации</Form.Label>
                <Form.Control
                    value={companyName}
                    onChange={handleCompanyNameChange}
                    required
                    type="text"
                    placeholder="Введите наименование"
                />
                <Form.Control.Feedback type="invalid">
                    Обязательное поле
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label>Количество лет работы на рынке</Form.Label>
                <Form.Control
                    min={0}
                    value={workAge}
                    onChange={handleWorkAgeChange}
                    required
                    type="number"
                    placeholder="Введите количество лет"
                />
                <Form.Control.Feedback type="invalid">
                    Обязательное поле. Значение должно быть больше или равно 0
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label>Отрасль деятельности</Form.Label>
                <Form.Select
                    value={industry}
                    onChange={handleIndustryChange}
                    required
                    aria-label="select item"
                >
                    <option></option>
                    <option value="Промышленность">Промышленность</option>
                    <option value="Сельское хозяйство">Сельское хозяйство</option>
                    <option value="Строительство">Строительство</option>
                    <option value="Торговля">Торговля</option>
                    <option value="Транспорт">Транспорт</option>
                    <option value="Услуги">Услуги</option>
                    <option value="Лесное хозяйство">Лесное хозяйство</option>
                    <option value="Другое">Другое</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    Обязательное поле
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label>Предполагаемый размер аванса (% от стоимости предмета лизинга)</Form.Label>
                <Form.Select
                    value={advancePayment}
                    onChange={handleAdvancePaymentChange}
                    required
                    aria-label="select item"
                >
                    <option></option>
                    <option value="0">0</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    Обязательное поле
                </Form.Control.Feedback>
            </Form.Group>
            <ButtonMenu
                activeForm={2}
                handleSubmitClick={handleSubmit}
                handlePreviousFormButtonClick={handlePreviousFormButtonClick}
            />
        </div>
    )
}

export default LesseeInformation