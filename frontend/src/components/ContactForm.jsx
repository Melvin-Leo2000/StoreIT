import { Button, CardContent, Grid, TextField, Card , Box} from '@mui/material'
import React from 'react'
import { useState } from 'react'
function ContactForm() {
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
            <form onSubmit={handleSubmit}>
                <Card style = {{maxWidth: 500, margin: "0 auto", padding: "20px 5px"}}>
                    <CardContent>
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
                            <Grid sx={12} item>
                                <Button 
                                    type='submit' 
                                    variant='contained' 
                                    color='primary'
                                    sx={{width:"100%" ,margin:"auto",mt: 2}} 
                                >Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </form>
        </Box>



    </div>
  )
}

export default ContactForm