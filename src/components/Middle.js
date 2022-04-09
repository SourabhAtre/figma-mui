import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Stack from '@mui/material/Stack';

export default function Middle() {
  return (
      <div className="B-container">

    <Box
      component="form"
      sx={{
        '& > :not(style)': {  }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" placeholder="Location" variant="outlined" sx={{width: '10ch'}}/>
      <TextField id="outlined-basic" placeholder="Try Home Baker's.." variant="outlined" sx={{width: '18ch'}} />
      <TextField id="outlined-basic" placeholder="Date & Time" variant="outlined" sx={{width: '14ch'}} />
      <Button variant="contained" color="success"sx={{borderRadius:'0px',borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>Success</Button>
    </Box>
      </div>
  );
}
