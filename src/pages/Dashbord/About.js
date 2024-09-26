import React from 'react'
import { Box, Typography,Stack } from '@mui/material'
function About() {
  return (
    <>
    <Box 
            sx={{
                width: '100%', 
                height:'80vh',   // Full viewport width
                // backgroundColor: 'lightblue', // Background color
                boxSizing: 'border-box',
                // backgroundColor:'red' // Include padding and border in total size
            }}
        >    
           <Box  sx={{
                width: '70%', 
                height:'50vh',   // Full viewport width
                // backgroundColor: 'lightblue', // Background color
                boxSizing: 'border-box',
                // backgroundColor:'red',
                padding:"5rem" // Include padding and border in total size
            }}>
           <Stack spacing={2}>
           <Typography variant='h4'>About</Typography>
            <Typography variant='caption'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 

Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 

Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
</Typography>
           </Stack>
           </Box>
            {/* Content goes here */}
        </Box>
    </>
  )
}

export default About
