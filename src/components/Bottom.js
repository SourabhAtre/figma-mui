import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function Bottom() {
  return (
    <Stack direction="row" id='share-btn'>
      <Button variant="contained" endIcon={<SendIcon />}>Enter location..or Auto locate</Button>
    </Stack>
  );
}
