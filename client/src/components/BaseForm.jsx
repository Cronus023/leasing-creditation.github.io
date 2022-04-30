import React, {useState} from "react";

import {Form} from "react-bootstrap";

function BaseForm({ FormItem, previousData, handleSubmitForm, handlePreviousFormButtonClick }) {

    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({});

    const handleFormSubmit = (event) => {
        setValidated(true);
        handleSubmitForm(event, formData);
    };

    const handleDataSubmit = (formData) => {
        setFormData(formData);
    }

    return (
        <Form className="mt-5" noValidate validated={validated} onSubmit={handleFormSubmit}>
            <FormItem
                handleDataSubmit={handleDataSubmit}
                previousData={previousData}
                handlePreviousFormButtonClick={handlePreviousFormButtonClick}
            />
        </Form>
    )
}

export default BaseForm