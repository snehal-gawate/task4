import { Typography,Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
import { red } from "@mui/material/colors";

const StyledTypography = styled(Typography)({
    color: 'red',
    marginTop:'1vh'
    });

    const Styledheadingtypo=styled(Typography)({
        fontWeight:'bolder',
        marginTop:'2vh'
    })
    
export const Header=()=>{

    return(
        <div >
          
          <Container sx={{ backgroundColor:"#fce4ec"}}>
            <StyledTypography >COURSES CATEGORIES</StyledTypography>
            <Styledheadingtypo variant="h4" >Browse Trending Categories</Styledheadingtypo>
            </Container>
        </div>
    )
}