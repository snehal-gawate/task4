import React from "react";
import {  Container, Stack,Box, Typography, Paper, Button} from "@mui/material";
import styled from "styled-components";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import GpsFixedRoundedIcon from '@mui/icons-material/GpsFixedRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';

const StyledBox = styled(Box)({
     height:'480px',
     width:'450px',
    
     
    });

const Styledpaper =styled(Paper)({
  marginTop:"3vh",
  width: 350,
  height:80
}) ;

const myImage = require('./image.png');

export const Maincontainer=()=>{
    return(
        <div>
          
          <Container sx={{ backgroundColor:"#fce4ec"}}>
            <Stack direction="row">
            
            <Box height={3}/>
            <Stack direction="column">
             <Styledpaper>
               <Stack direction="row">
               <Paper sx={{width:15+'vh',height:80,color:'white',bgcolor:"black",  borderTopRightRadius:'85px',borderBottomRightRadius:'85px'}}>
                <InsightsRoundedIcon  sx={{ fontSize: 40,marginTop:"3vh" }}/>
                </Paper>
                <Box sx={{marginLeft:7+'vh'}}>
                 <Typography variant="h6">Technology</Typography>
                 <Typography>12 courses</Typography>
                 </Box>
                 </Stack>
                 </Styledpaper>
                
                < Styledpaper >
                <Stack direction="row">
                <Paper sx={{width:15+'vh',height:80,color:'white',bgcolor:"black",  borderTopRightRadius:'50px',borderBottomRightRadius:'50px'}}>
                <MedicalServicesIcon  sx={{ fontSize: 40,marginTop:"3vh" }}/>
                </Paper>
                <Box sx={{marginLeft:7+'vh'}}>
                 <Typography variant="h6">Health</Typography>
                 <Typography>6 courses</Typography>
                 </Box>
                 </Stack>
                </ Styledpaper>

                < Styledpaper>
                <Stack direction="row">
                <Paper sx={{width:15+'vh',height:80,color:'white',bgcolor:"black",  borderTopRightRadius:'85px',borderBottomRightRadius:'85px'}}>
                <LocalLibraryIcon  sx={{ fontSize: 40,marginTop:"3vh" }}/>
                </Paper>
                <Box sx={{marginLeft:7+'vh'}}>
                 <Typography variant="h6">Math</Typography>
                 <Typography>4 courses</Typography>
                 </Box>
                 </Stack>
                </ Styledpaper>

                < Styledpaper >
                <Stack direction="row">
                <Paper sx={{width:15+'vh',height:80,color:'white',bgcolor:"black",  borderTopRightRadius:'85px',borderBottomRightRadius:'85px'}}>
                <TypeSpecimenIcon  sx={{ fontSize: 40,marginTop:"3vh" }}/>
                </Paper>
                <Box sx={{marginLeft:7+'vh'}}>
                 <Typography variant="h6">Language</Typography>
                 <Typography>9 courses</Typography>
                 </Box>
                 </Stack>    
               </ Styledpaper>

              </Stack>

        <StyledBox>
        <Box component='img' src={myImage}  alt='' sx={{height:300+'px',marginTop:10+'vh'}}  />  
        </StyledBox>
            
             <Stack direction="column">
           
             < Styledpaper >
                <Stack direction="row">
                <Paper sx={{width:15+'vh',height:80,color:'white',bgcolor:"black",  borderTopRightRadius:'85px',borderBottomRightRadius:'85px'}}>
                  <LocalBarIcon sx={{ fontSize: 40 ,marginTop:"3vh"}}/>
                  </Paper>
                  <Box sx={{marginLeft:7+'vh'}}>
                  <Typography>Sceience</Typography>
                 <Typography>5 courses</Typography>
                 </Box>
                 </Stack>
               </ Styledpaper>

               < Styledpaper>
                <Stack direction="row">
                <Paper sx={{width:15+'vh',height:80,color:'white',bgcolor:"black",  borderTopRightRadius:'85px',borderBottomRightRadius:'85px'}}>
                <MedicalInformationIcon sx={{ fontSize: 40,marginTop:"3vh" }}/>
                </Paper>
                <Box sx={{marginLeft:7+'vh'}}>
                 <Typography variant="h6">Business</Typography>
                 <Typography>10 courses</Typography>
                 </Box>
                 </Stack>     
                </ Styledpaper>

                < Styledpaper >
                <Stack direction="row">
                <Paper sx={{width:15+'vh',height:80,color:'white',bgcolor:"black",  borderTopRightRadius:'85px',borderBottomRightRadius:'85px'}}>
                <AutoAwesomeMotionIcon sx={{ fontSize: 40,marginTop:"3vh" }}/>
                </Paper>
                <Box sx={{marginLeft:7+'vh'}}>
                 <Typography variant="h6">Graphics Design</Typography>
                 <Typography>15 courses</Typography>
                 </Box>
                 </Stack>    
                </ Styledpaper>

                < Styledpaper >
                <Stack direction="row">
                <Paper sx={{width:15+'vh',height:80,color:'white',bgcolor:"black",  borderTopRightRadius:'85px',borderBottomRightRadius:'85px'}}>
                < GpsFixedRoundedIcon sx={{ fontSize: 40 ,marginTop:"3vh"}}/>
                </Paper>
                <Box sx={{marginLeft:7+'vh'}}>
                 <Typography variant="h6">Marketing</Typography>
                 <Typography>13 courses</Typography>
                 </Box>
                 </Stack>    
               </ Styledpaper>
              
             </Stack>       
             </Stack>
      
          </Container>
         
        </div>
    )
}