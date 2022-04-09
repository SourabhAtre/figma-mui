import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
// import { createTheme } from "@material-ui/core/styles";

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" style={{ background: '#000000'}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Untitled
          </Typography>
          <Button variant="outlined" style={{ borderColor:'#ffffff', color:'#ffffff',borderRadius:'8px',marginRight:'25px'}}>Log in</Button>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="PlayArrowOutlined"
            sx={{ mr: 4 }}
          >
            <PlayArrowOutlinedIcon/>
          </IconButton>
          <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{color:'white',fontSize:'12px'}}>
          70%
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
        </NativeSelect>
      </FormControl>
    </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
