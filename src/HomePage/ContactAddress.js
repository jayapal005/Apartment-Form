import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ContactAddress() {
  const [name, setName] = React.useState('');
 
  const [phone, setphone] = React.useState('');
  const [email, setemail] = React.useState('');
  let result = /^[a-zA-Z ]+$/
  let regex=/^[0-9]{10}$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
       <div style={{display:"flex",justifyContent:"space-around",width:"100%",}}>


<div>

<TextField
        id="outlined-name"
        label="Manager Ph.No"
        value={Number}
        onChange={(e)=>{setphone(e.target.value)}}
      />

<p>{phone.length ==0?"please entyer your phone number":regex.test(phone) === false ? "please enter valid phone":""}</p>      

</div>

<div>

<TextField
        id="outlined-uncontrolled"
        label="E-Mail Address"
        defaultValue=""
        onChange={(e)=>{setemail(e.target.value)}}
      />

<p>{email.length ==0?"please entyer your email":mailformat.test(email) === false ? "please enter valid email":""}</p>
</div>

<div>


<TextField
        id="outlined-uncontrolled"
        label="Web Address"
        defaultValue=""
        onChange={(e)=>{setName(e.target.value)}}
      />
<p>{name.length == 0 ?"please enter address":""}</p>
</div>
</div>

<div style={{display:"flex",justifyContent:"space-evenly",width:"60%",padding:"-1% 15%"}}>


</div>
     
     
     
    </Box>
  );
}
