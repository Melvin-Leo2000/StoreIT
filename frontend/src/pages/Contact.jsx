import React from 'react'
import { Box , Grid, Typography} from '@mui/material'
import bluebackground from './images/bluebackground.jpg'
import MailIcon from '@mui/icons-material/Mail';
import "./contact.css"
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div>
        <Grid item paddingTop={8} margin='0' width="100%">
          <img src={bluebackground} alt="bluewallpaper" width ={"100%"} height="280vh" />
          <Typography 
            fontFamily={'quicksand'}
            variant="h3" 
            textAlign={'center'} 
            width={'100%'} 
            sx={{
              position: "absolute", 
              top: "120px", 
              color:"#fff",
            }}
          >
            CONTACT US
            <MailIcon  fontSize='28' sx={{marginLeft: 2, marginTop: 1, paddingTop: 1}}/>
          </Typography>
        </Grid>

        <ContactForm />
    </div>
  )
}

export default Contact