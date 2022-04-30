import React, {useState} from "react";

import {Form} from 'react-bootstrap';
import ButtonMenu from "./ButtonMenu";

function ProjectInformation({handleDataSubmit, previousData}) {

    const [supplier, setSupplier] = useState("");
    const [itemPay, setItemPay] = useState(0);
    const [item, setItem] = useState("");
    const [additionalSecurity, setAdditionalSecurity] = useState("");

    const handleChangeSupplier = (event) => {
        setSupplier(event.target.value)
    }

    const handleChangeItemPay = (event) => {
        setItemPay(event.target.value)
    }

    const handleChangeItem = (event) => {
        setItem(event.target.value)
    }

    const handleChangeAdditionalSecurity = (event) => {
        setAdditionalSecurity(event.target.value)
    }

    const handleSubmit = () => {
        previousData["projectInformation"] = {
            supplier,
            itemPay,
            item,
            additionalSecurity,
            leasingTerm: 89,
            leasingBonus: 2
        };
        handleDataSubmit(previousData);
    };

    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Сведения о проекте</h3>
            <Form.Group>
                <Form.Label>Поставщик</Form.Label>
                <Form.Control
                    value={supplier}
                    onChange={handleChangeSupplier}
                    required
                    type="text"
                    placeholder="Введите название"
                />
                <Form.Control.Feedback type="invalid">
                    Обязательное поле
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label>Стоимость предмета лизинга</Form.Label>
                <Form.Control
                    min={0}
                    value={itemPay}
                    onChange={handleChangeItemPay}
                    required
                    type="number"
                    placeholder="Введите стоимость"
                />
                <Form.Control.Feedback type="invalid">
                    Обязательное поле. Стоимость должна быть больше 0
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label>Предмет лизинга</Form.Label>
                <Form.Select
                    value={item}
                    onChange={handleChangeItem}
                    required
                    aria-label="select item"
                >
                    <option></option>
                    <option value="Транспорт легковой">Транспорт легковой</option>
                    <option value="Транспорт грузовой">Транспорт грузовой</option>
                    <option value="Транспорт пассажирский">Транспорт пассажирский</option>
                    <option value="Строительная/дорожная техника">Строительная/дорожная техника</option>
                    <option value="Коммунальная/специализированная техника">
                        Коммунальная/специализированная техника
                    </option>
                    <option value="Сельскохозяйственная техника">Сельскохозяйственная техника</option>
                    <option value="Транспорт пассажирский">Транспорт пассажирский</option>
                    <option
                        value="Оборудование требующее монтажа и демонтажа (доильная установка, зерносушилка, комплекс хранения зерна)">
                        Оборудование требующее монтажа и демонтажа (доильная установка, зерносушилка, комплекс хранения
                        зерна)
                    </option>
                    <option value="Прицепы/полуприцепы">Прицепы/полуприцепы</option>
                    <option value="Вагоны/полувагоны">Вагоны/полувагоны</option>
                    <option value="Другое">Другое</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    Обязательное поле
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label>Дополнительное обеспечение</Form.Label>
                <Form.Select
                    required
                    value={additionalSecurity}
                    onChange={handleChangeAdditionalSecurity}
                    aria-label="select item"
                >
                    <option></option>
                    <option value="Банковская гарантия">Банковская гарантия</option>
                    <option value="Поручительство юридического лица">Поручительство юридического лица</option>
                    <option value="Другое">Другое</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    Обязательное поле
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label>Срок лизинга - значение постоянно</Form.Label>
                <Form.Control
                    disabled
                    type="text"
                    placeholder="89 месяцев"
                />
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label>Вознаграждение лизингодателя - значение постоянно</Form.Label>
                <Form.Control
                    disabled
                    type="text"
                    placeholder="2%"
                />
            </Form.Group>
            <ButtonMenu activeForm={1} handleSubmitClick={handleSubmit}/>
        </div>
    )
}

export default ProjectInformation