import { Grid, Typography} from '@mui/material'
import React from 'react'
import AccordionFaq from '../components/AccordionFaq'
import bluebackground from './images/bluebackground.jpg'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
function Faq() {
  return (

      
      <Grid container>
        <Grid item paddingTop={8} margin='0' width="100%">
          <img src={bluebackground} alt="bluewallpaper" width ={"100%"} height="280vh" />
          <Typography 
            fontFamily={'quicksand'}
            variant="h3" 
            textAlign={'center'} 
            width={'100%'} 
            sx={{
              position: "absolute", 
              top: "130px", 
              color:"#fff",
            }}
          >
            FREQUENTLY ASKED QUESTIONS
            <QuestionAnswerIcon fontSize='28' sx={{marginLeft: 2, marginTop: 1, paddingTop: 1}}/>
          </Typography>
          
        </Grid>

        <Grid item rowSpacing={2} paddingTop={10} paddingLeft={5} paddingRight={5} paddingBottom={20} margin='auto' direction='column'>
          <AccordionFaq />
        </Grid>
      </Grid>


          



  )
}

export default Faq