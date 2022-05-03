import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CatalogCategories() {
  const [value, setValue] = React.useState(0);
 
  

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

  return (
    <main><Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs id="tabs" value={value} onChange={handleChange} centered>
        <Tab label="Habilidades" />
        <Tab label="Enemigos" />
        <Tab label="Consumibles" />
        <Tab label="Armas" />
      </Tabs>
    </Box><h1 id='prueba'></h1></main>
  );
}
