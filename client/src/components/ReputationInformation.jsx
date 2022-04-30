import React, {useState} from "react";

import {Form} from "react-bootstrap";
import ButtonMenu from "./ButtonMenu";

function ReputationInformation({handleDataSubmit, previousData, handlePreviousFormButtonClick}) {

    const [isBankruptcy, setBankruptcy] = useState("Нет");
    const [isDebt, setDebt] = useState("Нет");
    const [isPaymentDebt, setPaymentDebt] = useState("Нет");
    const [isCriminal, setCriminal] = useState("Нет");

    const handleBankruptcyChange = () => {
        isBankruptcy === "Да" ? setBankruptcy("Нет") : setBankruptcy("Да")
    }

    const handleDebtChange = () => {
        isDebt === "Да" ? setDebt("Нет") : setDebt("Да")
    }

    const handlePaymentDebtChange = () => {
        isPaymentDebt === "Да" ? setPaymentDebt("Нет") : setPaymentDebt("Да")
    }

    const handleCriminalChange = () => {
        isCriminal === "Да" ? setCriminal("Нет") : setCriminal("Да")
    }

    const handleSubmit = () => {
        previousData["reputationInformation"] = {
            isBankruptcy,
            isDebt,
            isPaymentDebt,
            isCriminal,
        };
        handleDataSubmit(previousData);
    };

    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Сведения о деловой репутации</h3>
            <Form.Group className="mt-5">
                <Form.Label>Организация находится на стадии экономической несостоятельности (банкротства) ?</Form.Label>
                <Form.Check
                    type="switch"
                    id="isBankruptcy"
                    value={isBankruptcy}
                    label={isBankruptcy}
                    onChange={handleBankruptcyChange}
                />
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label>Организация имеет задолженность по платежам в ФСЗН ?</Form.Label>
                <Form.Check
                    type="switch"
                    id="isDebt"
                    value={isDebt}
                    label={isDebt}
                    onChange={handleDebtChange}
                />
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label>Организация имеет задолженность по платежам в бюджет ?</Form.Label>
                <Form.Check
                    type="switch"
                    id="isPaymentDebt"
                    value={isPaymentDebt}
                    label={isPaymentDebt}
                    onChange={handlePaymentDebtChange}
                />
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label>
                    Организации характерен факт привлечения к уголовной ответственности учредителей
                    (участников) и (или) руководителей организации ?
                </Form.Label>
                <Form.Check
                    type="switch"
                    id="isCriminal"
                    value={isCriminal}
                    label={isCriminal}
                    onChange={handleCriminalChange}
                />
            </Form.Group>
            <ButtonMenu
                activeForm={3}
                handleSubmitClick={handleSubmit}
                handlePreviousFormButtonClick={handlePreviousFormButtonClick}
            />
        </div>
    )
}

export default ReputationInformation