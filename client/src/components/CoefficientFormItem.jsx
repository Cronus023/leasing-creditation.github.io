import React, {useState} from "react";

import {Form} from "react-bootstrap";

function CoefficientFormItem({label, value, onChange}) {

    const [coefficient, setCoefficient] = useState(0);

    const handleChangeCoefficient = (event) => {
        setCoefficient(event.target.value)
        onChange(coefficient)
    }

    return (
        <Form.Group className="mt-2">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                min={0}
                required
                step={0.001}
                type="number"
                value={coefficient}
                onChange={handleChangeCoefficient}
                placeholder="Введите коэффициент"
            />
            <Form.Control.Feedback type="invalid">
                Обязательное поле. Коэффициент должен быть больше 0
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default CoefficientFormItem