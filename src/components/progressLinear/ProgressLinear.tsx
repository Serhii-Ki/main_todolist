import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function ProgressLinear() {
  return (
      <Box sx={{ width: '100%', position: 'absolute'}}>
        <LinearProgress color="success"/>
      </Box>
  );
}

export default ProgressLinear;