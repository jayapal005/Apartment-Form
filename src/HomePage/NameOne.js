import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function StateTextFields() {
  const [name, setName] = React.useState('');
  const[apartment,setApartment]=React.useState('')
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="ApartMent Name"
        value={name}
        onChange={handleChange}
        
      />
      <TextField
        id="outlined-uncontrolled"
        label="PinCode"
        defaultValue=""
        type={"number"}
      />
      <TextField
        id="outlined-uncontrolled"
        label="Street Name"
        defaultValue=""
      /> 
    </Box>
  );
}
