import React from "react";

import {Form} from "react-bootstrap";
import ButtonMenu from "./ButtonMenu";

function ProfitAndLoseInformation({handleDataSubmit, previousData, handlePreviousFormButtonClick}) {

    const handleSubmit = () => {
        handleDataSubmit(previousData);
    }

    return (
        <div>
            Страница не доступна в данный момент
            <ButtonMenu
                activeForm={5}
                handleSubmitClick={handleSubmit}
                handlePreviousFormButtonClick={handlePreviousFormButtonClick}
            />
        </div>
    )
}

export default ProfitAndLoseInformation