import { styled,TextField  } from '@mui/material'
export const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused': {
        boxShadow: 'none', // Remove blue background and outline
      },
  
    },
    
    borderRadius: '8px',
  }));