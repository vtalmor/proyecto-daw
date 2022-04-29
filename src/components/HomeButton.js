import React from 'react';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';

function HomeButton() {

    let navigate = useNavigate();
    function handleClick() {
        navigate("/proyecto-daw");
    }  
    return (
        <Fab onClick={handleClick} size="small" color="primary">
            <HomeIcon />
        </Fab>
    );
}

export default HomeButton;