import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contacts = () => {
    return (
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 5,
          maxWidth: '90%',
          height: 'auto',
          padding: 8,
          
        },
      }}
    >
      <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant='h4' sx={{textAlign: 'center'}}>Contact Us</Typography>
          <br />
          <BusinessIcon/>
          <Typography variant='subtitle1' mt={2} sx={{textAlign: 'center'}}>
          4218 Burning Memory Lane, Philadelphia, PA         
          </Typography>
          <br />
          <PhoneIcon/>
          <Typography variant='subtitle1' mt={2} sx={{textAlign: 'center'}}>
          215-320-2985  
          </Typography>
          <br />
          <EmailIcon/>
          <Typography variant='subtitle1' mt={2} sx={{textAlign: 'center'}}>
            store@sinatra.com
          </Typography>
            
      </Paper>
      
    </Box>
    );
};

export default Contacts;