import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FlatDetails() {
  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
      <div>
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
        label="Bed Rooms"
        type={"number"}
        value={name}
        onChange={handleChange}
        
      />
      <TextField
        id="outlined-uncontrolled"
        label="Bathrooms"
        type={"number"}
        defaultValue=""
      />
     
    </Box>
  </div>
  );
}
