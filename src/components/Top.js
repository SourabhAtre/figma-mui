import * as React from 'react';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

export default function Top() {
  return (
    <>
    <div className="top-container">
     <b>Welcome to Figma!</b>Create an account to edit and collaborate on this file.
    
    <Stack direction="row" id="btn-all" spacing={2}>
    <Button variant="outlined" startIcon={<GoogleIcon />} sx={{borderRadius:'9px',color:'black',borderColor:'black',fontSize:'10px'}}>Continue with Google</Button>
      <Button variant="contained" color="success" sx={{borderRadius:'9px',fontSize:'10px'}}>Signup with email</Button>
    </Stack>
    </div>
    </>
  );
}
