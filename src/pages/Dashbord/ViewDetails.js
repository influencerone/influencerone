import React from 'react'
import LogoutButton from '../../component/comon/Buttons/LogoutButton.js'
import { Box, Grid2,Stack, Typography } from '@mui/material'
import { Imageicon } from '../../assets.js'
function Home() {
  return (
  <>
   <Box sx={{height:'100vh',
    padding:'5rem'
   }}>
    <Grid2 columnSpacing={{ xs: 12, sm: 12, md: 12 }}>
    <Stack spacing={3}>

       <Box sx={{
        // backgroundColor:'black',
        width:'100%',
        border:'1px solid gray',
        display:'flex',
         justifyContent:'space-between',
         padding:'1rem',
         alignItems:'center'
       }}>
         <Box sx={{display:'flex'}}>
           <Box sx={{height:'5rem',width:'5rem'}}>
               <img src={Imageicon} alt=''/>
           </Box>
             <Box>
                
               <Typography variant='h5' align='left'>Post </Typography>
               <Typography align='left'>Organizer@gmia.com</Typography>
             </Box>
           </Box>
           <Box>
               <Typography>Offer $279</Typography>
    
           </Box>
       </Box>

       <Box>
         <Typography variant='h4' align='left'> Service Details</Typography>
         <Box sx={{
        // backgroundColor:'black',
        width:'100%',
        border:'1px solid gray',
        display:'flex',
        flexDirection:'column',
         justifyContent:'space-between',
         padding:'1rem',
         alignItems:'center'
       }}> 
        <Box sx={{
        // backgroundColor:'black',
        width:'100%',
        display:'flex',
         justifyContent:'space-between',
         padding:'1rem',
         alignItems:'center'
       }}>
        <Box sx={{display:'flex'}}>
           <Box sx={{height:'5rem',width:'5rem'}}>
               <img src={Imageicon} alt='im'/>
           </Box>
            <Box sx={
                {marginLeft:'1rem'}
            }>
            <Typography variant='h5' align='left'>Post </Typography>
            <Typography variant='caption' color='gray'>2 post with the products and how to use product with caption and promo code</Typography>
            </Box>
                
        </Box>
           <Box>
               <Typography>$100</Typography>
    
           </Box>
        </Box>
        <Box sx={{
        // backgroundColor:'black',
        width:'100%',
        display:'flex',
         justifyContent:'space-between',
         padding:'1rem',
         alignItems:'center'
       }}>
        <Box sx={{display:'flex'}}>
           <Box sx={{height:'5rem',width:'5rem'}}>
               <img src={Imageicon} alt='im'/>
           </Box>
            <Box sx={
                {marginLeft:'1rem'}
            }>
            <Typography variant='h5' align='left'>Post </Typography>
            <Typography variant='caption' color='gray'>2 post with the products and how to use product with caption and promo code</Typography>
            </Box>
                
        </Box>
           <Box>
               <Typography>$100</Typography>    
           </Box>
        </Box>

        <Box sx={{
        // backgroundColor:'black',
        width:'100%',
        display:'flex',
         justifyContent:'space-between',
         padding:'1rem',
         alignItems:'center'
       }}>
        <Box sx={{display:'flex'}}>
           <Box sx={{height:'5rem',width:'5rem'}}>
               <img src={Imageicon} alt='im'/>
           </Box>
            <Box sx={
                {marginLeft:'1rem'}
            }>
            <Typography variant='h5' align='left'>Post </Typography>
            <Typography variant='caption' color='gray'>2 post with the products and how to use product with caption and promo code</Typography>
            </Box>
                
        </Box>
           <Box>
               <Typography>$100</Typography>
    
           </Box>
        </Box>

       </Box>

       

       </Box>
        <LogoutButton/>
    </Stack>
    </Grid2>
   </Box>
  </>
  )
}

export default Home
