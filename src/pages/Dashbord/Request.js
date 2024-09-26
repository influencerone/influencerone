import { reelIcon, logoIcon, story, story_2,wrong,write,vector } from "../../asstes";
import { Card, Box, Typography,Stack,Divider } from "@mui/material";
import style from "./Style/request.module.css";
import React from "react";

function Request() {
  const items = [
    {
      title: "Reel",
      details: "Campine Details and product name",
      price: "$50.5",
      quantity: 4,
      icon: reelIcon,
    },
    {
      title: "Story",
      details: "Campine Details and product name",
      price: "$50.5",
      quantity: 4,
      icon: story,
    },
    {
      title: "Story",
      details: "Campine Details and product name",
      price: "$50.5",
      quantity: 4,
      icon: story_2,
    },
  ];
  // const handleViewDetails = () => {
  //     // Add your view details logic here
  //     console.log("View details clicked!");
  //   };
  return (
    <>
      <div className=" overflow-auto p-4 flex flex-wrap">
      {items.map((item, index) => (
      <Card sx={styles.card}>
        <Stack spacing={2}>

        <Box sx={styles.container}>
          <Box sx={styles.organizer}>
            <Typography variant="h4">Organizer</Typography>
            <Typography variant="body2" color="#8c8c8c">
              Manager Name{" "}
            </Typography>
          </Box>
          <Box sx={""}>
            <img src={logoIcon} alt="im" />
          </Box>
        </Box>

         <Box>
         <Box sx={styles.container}>
          <Box sx={styles.container}>
            <Box sx={{}}>
              <img src={reelIcon} alt="im" />
            </Box>
            <Box sx={styles.flexBoxCol}>
              <Typography sx={{ fontWeight: "bold" }}>Reel</Typography>
              <Typography color="#8c8c8c">
                Campine Details and product name
              </Typography>
            </Box>{" "}
          </Box>
          <Box sx={styles.flexBoxRow}>
            <Typography sx={{ fontWeight: "bold" }}>$50.5</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Oty: 4</Typography>
          </Box>
         
        </Box>
        <Divider sx={{ backgroundColor: 'grey.800' }}/>
         </Box>
         
          
        {/* Instagram story */}
         <Box>
         <Box sx={styles.container}>
          <Box sx={styles.container}>
            <Box sx={{}}>
              <img src={story} alt="im" />
            </Box>
            <Box sx={styles.flexBoxCol}>
              <Typography sx={{ fontWeight: "bold" }}>Reel</Typography>
              <Typography color="#8c8c8c">
                Campine Details and product name
              </Typography>
            </Box>{" "}
          </Box>
          <Box sx={styles.flexBoxRow}>
            <Typography sx={{ fontWeight: "bold" }}>$50.5</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Oty: 4</Typography>
          </Box>
         
        </Box>
          <Divider sx={{ backgroundColor: 'grey.800' }}/>
        </Box>
         {/* Story */}
        <Box>
         <Box sx={styles.container}>
          <Box sx={styles.container}>
            <Box sx={{}}>
              <img src={story_2} alt="im" />
            </Box>
            <Box sx={styles.flexBoxCol}>
              <Typography sx={{ fontWeight: "bold" }}>Reel</Typography>
              <Typography color="#8c8c8c">
                Campine Details and product name
              </Typography>
            </Box>{" "}
          </Box>
          <Box sx={styles.flexBoxRow}>
            <Typography sx={{ fontWeight: "bold" }}>$50.5</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Oty: 4</Typography>
          </Box>
         
        </Box>
          <Divider sx={{ backgroundColor: 'grey.800' }}/>
        </Box>

        <Box>
         <Box sx={styles.container}>

          <Box sx={styles.container}>

          <Box sx={styles.flexBoxCol}>
              <Typography color="#8c8c8c" sx={{ fontWeight: "bold" }}>Total </Typography>
              <Typography >
              $50.5
              </Typography>
            </Box>

            <Box sx={{display:'flex',}}>
              <img src={wrong} alt="im" style={{marginLeft:'1rem'}} />
              <img src={write} alt="im"  style={{marginLeft:'1rem'}} />
            </Box>
            <Box sx={{
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              width:'2rem',
            }}>  <img src={vector} alt="im"/></Box>
          </Box>
         
        </Box>
          
        </Box>
        
        </Stack>
      </Card>
     ))}
      </div>
    </>
  );
}
const styles = {
  card: {
    width: "400px",
    height: "550px",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
    padding:'1rem',
    margin:'1rem',
    borderRadius: '15px'
  },
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  flexBoxCol: {
    // backgroundColor:"black"
  },
  flexBoxRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: '2rem',
    paddingRight: '2rem',
    marginTop:'1rem'    // backgroundColor:"black"
  },
};

export default Request;
