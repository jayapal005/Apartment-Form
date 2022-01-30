import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RedioButton() {
  return (
      <div style={{display:"flex",justifyContent:"space-around"}}>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">CCTV Service</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        
        <FormControlLabel value="male" control={<Radio />} label="Yes" />
        <FormControlLabel value="other" control={<Radio />} label="No" />
        
      </RadioGroup>
    </FormControl>
    <FormControl>
    <FormLabel id="demo-row-radio-buttons-group-label">Broad Band Service</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      
      <FormControlLabel value="male" control={<Radio />} label="Yes" />
      <FormControlLabel value="other" control={<Radio />} label="No" />
      
    </RadioGroup>
  </FormControl>
  </div>
  );
}
