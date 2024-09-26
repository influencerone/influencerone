import { uplodFile } from "../../asstes";
import {  Box, Typography,TextField} from "@mui/material";

import React from "react";

function PortfolioBar() {
 
 
  return (
    <>
      <div className=" overflow-auto p-4 flex flex-wrap">

       <div className="w-full h-[20rem] border-dashed border-2 border-grey-600 p-4 flex justify-center items-center">
         <img src={uplodFile} alt="img" className="max-w-full max-h-full" />
       </div>
       <Box sx={styles.flexBoxCol}>
              <Typography sx={{ fontWeight: "bold" }}>Heading </Typography>
              <Typography color="#8c8c8c">
              About.....
              </Typography>
            </Box>{" "}
        <div className="w-full h-[15rem]  p-4 ">
        <Typography sx={{ fontWeight: "bold" }}>Portfolio link </Typography>
        <TextField fullWidth  id="fullWidth"sx={{
    marginTop: '20px',  // Add top margin
    borderRadius: '10px',  // Customize border radius
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px', // Apply border radius to input
      '& fieldset': {
        borderRadius: '10px',  // Border-radius for the outer border
      },
    },
  }} />
       </div>
      </div>
    </>
  );
}
const styles = {
   
    flexBoxCol: {
      marginTop:'1rem'
    },
   
  };

export default PortfolioBar;
