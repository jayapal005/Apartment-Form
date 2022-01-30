import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons() {
  return (
      <div style={{display:"flex",justifyContent:"space-around",marginTop:"2rem",}}>
    <Stack direction="row" spacing={2}>
      
      <Button style={{boxShadow: "-1px 0px 26px 0 rgb(0 0 0 / 61%)"}} variant="contained" color="success">
        Submit
      </Button>
      
    </Stack>
    </div>
  );
}
