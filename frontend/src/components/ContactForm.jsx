import { Button, CardContent, Stack, Grid, TextField, Card , Box,styled, Typography, Paper, FormLabel} from '@mui/material'
import React from 'react'
import { useState } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
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
        console.log(inputs)
    }

  return (
    
    //email tele phone left side
    //name, tele, msg (right side)
    <div>
    <Box>
        <Stack direction={{xs:"column", sm:'row'}} spacing={{xs:1, sm:2, md:2}} mt={5} ml={2} mr={2} mb={2}>
            
            <Card style = {{maxWidth: 500, margin: "0 auto", padding: "20px 0px"}}>
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

            <Card style = {{maxWidth: 500, margin: "0 auto", padding: "20px 0px"}}>
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
                                label="Telegram Handle"
                                onChange={handleChange}
                                placeholder='Enter your telegram handle'
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
                                placeholder='Enter your message'
                                variant='outlined'
                                name = "msg"
                                value = {inputs.msg}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid xs={3} item>
                            <Button 
                                type='submit' 
                                variant='contained' 
                                color='primary'
                                sx={{width:"100%" ,margin:"auto",mt: 2}} 
                            >Submit
                            </Button>
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