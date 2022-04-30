import React from "react";
import {Button} from "react-bootstrap";

function ButtonMenu({ activeForm, handlePreviousFormButtonClick, handleSubmitClick }) {

    const previousButtonClick = () => {
        handlePreviousFormButtonClick(activeForm - 1);
    }

    return (
        <div className="mt-2">
            {activeForm !== 1 && (
                <Button onClick={previousButtonClick}>Назад</Button>
            )}
            {activeForm !== 6 && (
                <Button
                    type="submit"
                    style={{float: 'right'}}
                    onClick={handleSubmitClick}
                >
                    Дальше
                </Button>
            )}
        </div>
    )
}

export default ButtonMenu