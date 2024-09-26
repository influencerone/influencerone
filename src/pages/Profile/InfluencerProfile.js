// Importent imports file
import React from 'react'
import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { CustomTextField } from '../../components/comon/textfield/TextField.tsx';
import { BootstrapButton } from '../../components/comon/Buttons/Buttons.tsx';
import { Profilestyles } from './style/Style.js';
import { right } from '../../asstes.js';
// import { Formik,Field,Form} from 'formik';
function Profile() {
  return (
    <>
      <Box style={Profilestyles.container}>
        <Grid container spacing={0} style={Profilestyles.gridContainer}
          size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <Grid  display={'flex'} alignItems={'center'} justifyContent={'center'} size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Box sx={{ padding: 2,width:'100%'}}>
              <Stack spacing={1} sx={{
              }} direction="column"
                alignItems="center">
                <Box sx={Profilestyles.imageContainer}
                >
                  <img src="https://img.freepik.com/free-photo/close-up-portrait-young-man-isolated-black-studio-background-photoshot-real-emotions-male-model-crying-throught-laughting-smiling-facial-expression-human-emotions-concept_155003-25587.jpg?w=996&t=st=1726827598~exp=1726828198~hmac=6b6340da1aa5d8a46dc74c9501b39d08f5d3020038ad50cf7d61475b3cb2478f"
                    alt="Young man expressing mixed emotions"
                    style={{width: '100%',height: '100%',objectFit: 'cover',borderRadius: '5rem'  // Cover the box while maintaining aspect ratio
                    }}
                  />
                </Box>

                <Box sx={{ width: '60%', }} alignItems={'start'}>
                  <Typography variant="overline" sx={Profilestyles.label}>Email</Typography>
                  <CustomTextField fullWidth size="small" />
                </Box>
                <Box sx={{ width: '60%' }} alignItems={'start'}>
                  <Typography variant="overline"  sx={Profilestyles.label}>Phone</Typography>
                  <CustomTextField fullWidth size="small" />
                </Box>
                <Box sx={{ width: '60%' }} alignItems={'start'}>
                  <Typography variant="overline"  sx={Profilestyles.label}>Password</Typography>
                  <CustomTextField fullWidth size="small"  />
                </Box>
                <Box sx={{ width: '60%' }} alignItems={'start'}>
                  <Typography variant="overline" sx={Profilestyles.largeLabel}>Mob Number</Typography>
                  <CustomTextField fullWidth size="small" />
                </Box>
                <BootstrapButton variant="contained" disableRipple>
                  Edite
                </BootstrapButton>
              </Stack>
            </Box>
          </Grid>
          <Grid  size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
            sx={{ display: { xs: 'none', sm: 'none', md: 'block', } }}>
              <Box sx={{width:'100%',height:'100vh'}}>
                  <img src={right} alt='right'
                  style={{width: '100%',height: '100%',objectFit: 'cover',borderRadius: '5rem'  // Cover the box while maintaining aspect ratio
                  }}
                  />
              </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Profile
