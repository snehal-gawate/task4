import React from "react";
import { Box, Stack, Typography, IconButton, Button, Avatar
    , Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const StyledTypography = styled(Typography)({
    color: 'red',
    marginTop:'1vh'
    });

    const Styledheadingtypo=styled(Typography)({
        fontWeight:'bolder',
        marginTop:'2vh',
        marginLeft:'1vh'
    })

    const Stylediconbutton =styled(IconButton)({
         color:"white",
         backgroundColor:"#f50057",
      })

    const Styledbutton = styled(Button)({
        color:"white",
        backgroundColor:"#f50057",
        marginTop:"10vh",
        marginRight:"70vh"
    })

   

export const Footer=()=>{

    const myImage = require('./footerimage.png');

    return(
        <div>
            <Container>
       
                <Stack direction="row">
                <Box component='img' src={myImage} sx={{height:300+'px'}}/>
              
                <Box sx={{textAlign:"left",marginLeft:20+'vh'}}>
                <StyledTypography>FEACTURED COURSES</StyledTypography>
                <Styledheadingtypo variant="h4">Out Feature Courses</Styledheadingtypo>
                <Box height={5}></Box>
                <Styledheadingtypo variant="substitle1">We can support student forum 24/7 for national and 
                international student</Styledheadingtypo>
                
                <Box height={8}/>

                <Stack direction="row">
                <Stylediconbutton  >
                <CheckIcon  /></Stylediconbutton>
                <Styledheadingtypo variant="substitle1">Money-Back Guarantee</Styledheadingtypo>
                <Stylediconbutton sx={{marginLeft:10+'vh'}} >
                <CheckIcon /></Stylediconbutton>
                <Styledheadingtypo variant="substitle1">Certificate of completion</Styledheadingtypo>
                </Stack>

                <Box height={8}/>

                <Stack direction="row">
                <Stylediconbutton  >
                <CheckIcon /></Stylediconbutton>
                <Styledheadingtypo variant="substitle1">Downlodeable Resources</Styledheadingtypo>
                <Stylediconbutton sx={{marginLeft:9+'vh'}}  >
                <CheckIcon/></Stylediconbutton>
                <Styledheadingtypo variant="substitle1">10 
                + More Lessons</Styledheadingtypo>
                </Stack>

                <Styledbutton variant="contained" size="large"  startIcon={<SyncAltIcon/>}>start courses</Styledbutton>
                <Avatar sx={{marginLeft:105+'vh',bgcolor:"#f50057",marginBottom:10+'vh'}}  variant="square"> <ArrowUpwardIcon /> </Avatar>
                </Box>
               </Stack>
               
            </Container>
        </div>
    )
}