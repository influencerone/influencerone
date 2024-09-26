import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {  styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  border: `1px dashed ${theme.palette.text.secondary}`,
  borderRadius:'5px',
  lineHeight: '60px',
}));



function Subscriptions() {
  return (
  <>
   <Grid container spacing={2}>
        <Grid item xs={6} >
        
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
            
                <Item >
              
                </Item>
          
            </Box>
         
        </Grid>
    
    </Grid>
  </>
  )
}

export default Subscriptions
