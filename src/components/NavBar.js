import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const NavBar = () => {

	let navigate = useNavigate();

	function toHome() {
        navigate("/proyecto-daw/");
    } 
	function toHelp() {
        navigate("/proyecto-daw/help");
    }
	function toWiki() {
        navigate("/proyecto-daw/");
    }

  	return (
		<AppBar position="static">
	  		<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Button
							key={"home"}
							onClick={toHome}
							sx={{ my: 2, color: 'white', display: { xs: 'none', md: 'flex' } }}						
						>
							<HomeIcon />
							Inicio
						</Button>
						<Button
							key={"wiki"}
							onClick={toWiki}
							sx={{ my: 2, color: 'white', display: { xs: 'none', md: 'flex' } }}						
						>
							<MenuBookIcon />
							Biblioteca
						</Button>
						<Button
							key={"help"}
							onClick={toHelp}
							sx={{ my: 2, color: 'white', display: { xs: 'none', md: 'flex' } }}						
						>
							<QuestionMarkIcon />
							Ayuda
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
  	);
};
export default NavBar;