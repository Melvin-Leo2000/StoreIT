import { Button, CardContent, Stack, Grid, TextField, Card , Box,styled, Typography, Paper, FormLabel, Divider} from '@mui/material'
import React from 'react'
import { useState } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import Popup from "./Popup.jsx";

function ContactForm() {
    const StyledBox = styled(Box)({
        height: 500, 
        width: "100%", 
        cursor: "pointer", 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "center", 
        backgroundSize: 'cover'
    })

    const initialState = {
        name: '', 
        tele: '', 
        msg: '',
       }
    const [inputs, setInputs] = useState(initialState)

    const {name, tele,  msg} = inputs

    const handleChange = e => {
        const {name, value} = e.target
        setInputs({...inputs, [name]:value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
        inputs.name=''
        inputs.tele=''
        inputs.msg=''

        try {
            const res = await axios.post('/contact', {
                name, tele, msg
            })
        
            
          //here shoould send back the status to check fpor the status validation
          setInputs({...inputs, err: '', success: res.data.msg})
  
        } catch (err) {
          err.response.data.msg && 
          setInputs({...inputs})
        }
    }

    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }


  return (
    
    //email tele phone left side
    //name, tele, msg (right side)
    <div>
    <Box>
        <Stack direction={{xs:"column", sm:'row'}} spacing={{xs:1, sm:1, md:1}} mt={5} ml={2} mr={2} mb={2}>
            
            <Card style = {{maxWidth: 600, margin: "0 auto", padding: "20px 0px"}}>
                <CardContent>
                    <Typography variant='h5'>
                      Reach us <AccountBoxIcon />
                    </Typography>
                    
                    <Grid container spacing={1} paddingBottom={2} paddingTop={3}>
                        <Grid xs={12} item >
                          <Typography gutterBottom color='textSecondary' variant= "body1" component= "p" paddingBottom={2}>Email: Testing@gmail.com</Typography>
                        </Grid>

                        <Grid xs={12} item>
                          <Typography gutterBottom color='textSecondary' variant= "body1" component= "p" paddingBottom={2}>Telegram: ABCD Tan</Typography>

                        </Grid>

                        <Grid xs={12} item>
                          <Typography gutterBottom color='textSecondary' variant= "body1" component= "p" paddingBottom={2}>Phone number: +65 12345678</Typography>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Divider />

            <Card style = {{maxWidth: 600, margin: "0 auto", padding: "20px 0px"}}>
                <CardContent>
                    <Typography gutterBottom variant='h5'>Send your request</Typography>
                    <Typography gutterBottom color='textSecondary' variant= "body2" component= "p" paddingBottom={2}>Fill up the form and we will get back to you as soon as possible</Typography>
                    <form onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                        <Grid xs={12} item>
                            <TextField 
                                label="Name"
                                name = "name"
                                onChange={handleChange}
                                value = {inputs.name}
                                placeholder='Enter your name'
                                variant='outlined'
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid xs={12} item>
                            <TextField 
                                label="Contact"
                                onChange={handleChange}
                                placeholder='Enter your telegram handle / Phone number / School Email'
                                variant='outlined'
                                name = "tele"
                                value = {inputs.tele}
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid xs={12} item>
                            <TextField 
                                label="Message"
                                multiline rows={4}
                                onChange={handleChange}
                                placeholder='Anything concerning your storage order or general information'
                                variant='outlined'
                                name = "msg"
                                value = {inputs.msg}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid xs={3} item>
                            <div>
                                <Button 
                                    type='submit' 
                                    variant='contained' 
                                    color='primary'
                                    sx={{width:"100%" ,margin:"auto",mt: 2}}
                                >Submit
                                </Button>
                                {isOpen && <Popup 
                                    handleClose={togglePopup}
                                    content={<div>
                                        <h2 class='concern-h2'>Thank you for the message!</h2>
                                        <p class='concern-p'>We will reply you as soon as possible regarding your concern!</p>
                                    </div>}
                                />}
                            </div>
                        </Grid>
                    </Grid>
                    </form>
                </CardContent>
            </Card>
        </Stack>
        </Box>
    </div>
  )
}

export default ContactForm