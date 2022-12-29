import React from 'react'
import {Box, Stack, styled, Typography} from '@mui/material'
import smallBoxImage from '../assets/smallBoxes.jpg'
import largeBoxImage from '../assets/largeBoxes.jpg'
import oddSizeImage from '../assets/oddSizeBoxes.jpg'
function Categories() {
    const StyledBox = styled(Box)({
        height: 500, 
        width: "100%", 
        cursor: "pointer", 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "center", 
        backgroundSize: 'cover'
    })
    const StyledTypography = styled(Typography)({
        margin: "25% 50px 25% 50px",
        background: 'white',
        opacity: '0.7'
    })

  return (
    <Box>
        <Stack direction={{xs:"column", sm:'row'}} spacing={{xs:1, sm:2, md:4}} mt={5}>
            <StyledBox sx={{backgroundImage: `url(${smallBoxImage})`}}>
                <StyledTypography align='center' variant="h4">
                    Small boxes $8
                </StyledTypography>
                <StyledTypography align='center' variant="h7">
                    Description
                </StyledTypography>
            </StyledBox>
            <StyledBox sx={{backgroundImage: `url(${largeBoxImage})`}}>
                <StyledTypography align='center' variant="h4">
                    Large box $15
                </StyledTypography>
            </StyledBox>
            <StyledBox sx={{backgroundImage: `url(${oddSizeImage})`}} >
                <StyledTypography align='center' variant="h4">
                    Odd-Size Items/Luggage case $22
                </StyledTypography>
            </StyledBox>
        </Stack>
    </Box>
  )
}

export default Categories