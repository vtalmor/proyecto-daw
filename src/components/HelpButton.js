import React from 'react';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function HelpButton() {

    let navigate = useNavigate();
    function handleClick() {
        navigate("/proyecto-daw/help");
    }  
    return (
        <Fab onClick={handleClick} size="small" color="primary">
            <QuestionMarkIcon />
        </Fab>
    );
}

export default HelpButton;