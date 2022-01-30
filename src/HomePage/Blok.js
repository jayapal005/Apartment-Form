import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Bloks() {
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
        label="No.Of.block"
        value={name}
        type={"number"}
        onChange={handleChange}
      />
      <TextField
        id="outlined-uncontrolled"
        label="No.Of.Floors"
        defaultValue=""
        type={"number"}
      />
    </Box>
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
      label="No.Of.Flats in Floor"
      value={name}
      type={"number"}
      onChange={handleChange}
    />
    <TextField
      id="outlined-uncontrolled"
      label="No.Of.Parking Area"
      defaultValue=""
      type={"number"}
    />
  </Box>
  </div>
  );
}
