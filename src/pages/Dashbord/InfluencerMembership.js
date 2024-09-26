import React from 'react'
import { Typography,Box } from '@mui/material'
function Membership() {
  return (
    <div className=" overflow-auto p-4 flex flex-wrap">
   <div class="w-[491px] h-[177px] border-1  border-dashed border-gray-500 rounded-[20px] p-[2rem]">
     <div>
       <Typography variant='h5' sx={{ fontWeight: 500 }}>Subscription</Typography>
        <Box sx={{display:'flex', alignItems:'center'}}> <Typography variant='h5'sx={{ fontWeight: 500 }} >$500</Typography><span><Typography>/month</Typography></span></Box>
     </div>
   
     <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-between',marginTopl:'1rem'}}>
      <Box>
      <Typography variant='caption'sx={{ fontWeight: 500 }}>Starting Date</Typography><span><Typography variant='caption'>01/03/2024</Typography></span>
      </Box>
      <Box>
      <Typography variant='caption'sx={{ fontWeight: 500 }}></Typography>Ending Date<span><Typography variant='caption'>01/03/2024</Typography></span>
        </Box>  
    </Box>
    
   </div>
 
   </div>
  )
}

export default Membership
