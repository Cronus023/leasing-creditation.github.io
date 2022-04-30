import React, {useRef, useState} from "react";

import {Form} from "react-bootstrap";
import ButtonMenu from "./ButtonMenu";
import CoefficientFormItem from "./CoefficientFormItem";

function BalanceSheetInformation({handleDataSubmit, previousData, handlePreviousFormButtonClick}) {

    const [liquidityCoefficient, setLiquidityCoefficient] = useState(0);
    const [workingCapitalCoefficient, setWorkingCapitalCoefficient]  = useState(0);
    const [coverageOfLiabilitiesCoefficient, setCoverageOfLiabilitiesCoefficient]  = useState(0);
    const [absoluteLiquidityCoefficient, setAbsoluteLiquidityCoefficient] = useState(0);
    const [financialLeverageCoefficient, setFinancialLeverageCoefficient] = useState(0);
    const [accountsPayableToAccountsReceivableCoefficient, setAccountsPayableToAccountsReceivableCoefficient] = useState(0);
    const [capitalizationCoefficient, setCapitalizationCoefficient] = useState(0);
    const [financialIndependenceCoefficient, setFinancialIndependenceCoefficient] = useState(0);
    const [equity, setEquity] = useState("");

    const handleSubmit = () => {
        previousData["balanceSheetInformation"] = {
            liquidityCoefficient,
            workingCapitalCoefficient,
            coverageOfLiabilitiesCoefficient,
            financialLeverageCoefficient,
            absoluteLiquidityCoefficient,
            accountsPayableToAccountsReceivableCoefficient,
            capitalizationCoefficient,
            financialIndependenceCoefficient,
            equity
        };
        handleDataSubmit(previousData);
    };

    return (
        <div>
            <CoefficientFormItem
                value={liquidityCoefficient}
                onChange={value => setLiquidityCoefficient(value)}
                label={"Коэффициент текущей ликвидности"}
            />
            <CoefficientFormItem
                value={workingCapitalCoefficient}
                onChange={value => setWorkingCapitalCoefficient(value)}
                label={"Коэффициент обеспеченности собственными оборотными средствами"}
            />
            <CoefficientFormItem
                value={coverageOfLiabilitiesCoefficient}
                onChange={value => setCoverageOfLiabilitiesCoefficient(value)}
                label={"Коэффициент обеспеченности обязательств активами"}
            />
            <CoefficientFormItem
                value={absoluteLiquidityCoefficient}
                onChange={value => setAbsoluteLiquidityCoefficient(value)}
                label={"Коэффициент абсолютной ликвидности"}
            />
            <CoefficientFormItem
                value={financialLeverageCoefficient}
                onChange={value => setFinancialLeverageCoefficient(value)}
                label={"Коэффициент финансового левереджа"}
            />
            <CoefficientFormItem
                value={accountsPayableToAccountsReceivableCoefficient}
                onChange={value => setAccountsPayableToAccountsReceivableCoefficient(value)}
                label={"Коэффициент соотношений кредиторской и дебиторской задолженности\t\n"}
            />
            <CoefficientFormItem
                value={capitalizationCoefficient}
                onChange={value => setCapitalizationCoefficient(value)}
                label={"Коэффициент капитализации"}
            />
            <CoefficientFormItem
                value={financialIndependenceCoefficient}
                onChange={value => setFinancialIndependenceCoefficient(value)}
                label={"Коэффициент финансовой независимости"}
            />
            <Form.Group className="mt-2">
                <Form.Label>Собственный капитал</Form.Label>
                <Form.Select
                    value={equity}
                    onChange={event => setEquity(event.target.value)}
                    required
                    aria-label="select item"
                >
                    <option></option>
                    <option value="Вырос">Вырос</option>
                    <option value="Без изменений">Без изменений</option>
                    <option value="Понизился">Понизился</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    Обязательное поле
                </Form.Control.Feedback>
            </Form.Group>
            <ButtonMenu
                activeForm={3}
                handleSubmitClick={handleSubmit}
                handlePreviousFormButtonClick={handlePreviousFormButtonClick}
            />
        </div>
    )
}

export default BalanceSheetInformation