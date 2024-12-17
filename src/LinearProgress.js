import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export function LinearDeterminate({sumDonations}
  ) {
  const [progress, setProgress] = React.useState(sumDonations);
  console.log("progress"+sumDonations)
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={sumDonations} />
    </Box>);
}



