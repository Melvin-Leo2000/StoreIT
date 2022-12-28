import React from 'react'
import { Box, FormLabel, TextField, Typography, Button } from '@mui/material'
import { useState } from 'react';

function Order() {
    const [post, setPost] = useState()
    const [inputs, setInputs] = useState({
        name: "", 
        email: "", 
        date: "", 
        imageURL : "", 
        location: "", 
        date: "",
    })
    
    const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState, 
          [e.target.name]: e.target.value, 
        }))
    
      }
    const handleSubmit = (e) => {
        e.preventDefault()
        // postUpdate(inputs, id)
        //   .then((data) => console.log(data))
        //   .catch(err => console.log(err))
    }
    
    return (
    
    <Box 
        display = "flex" 
        flexDirection={"column"} 
        width= "100%"
        height="100%"
    >
        <Box display="flex" margin= "auto" padding={2}>
            <Typography fontWeight={'bold'} variant='h4' fontFamily={"dancing script"}>
                Order with Us!
            </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box 
            padding={3} 
            display="flex" 
            margin = "auto"
            width="80%" 
            flexDirection={"column"}>
              
            {/* <FormLabel sx={{fontFamily: "quicksand"}}>Name: </FormLabel> */}
            <TextField 
             onChange={handleChange}
             name="name"
             value={inputs.name} 
             label="Name"
             placeholder="Enter your name"
             variant='filled' 
             margin='normal' />

            <FormLabel sx={{fontFamily: "quicksand"}}>Desired Date of collection</FormLabel>
            <TextField 
              onChange={handleChange}
              name="description"
              type="date"
              value={inputs.date}
              variant='outlined' 
              margin='normal'/>

            <FormLabel sx={{fontFamily: "quicksand"}}>NUS email</FormLabel>
            <TextField 
              onChange={handleChange}
              name="email"
              type="email"
              label="Enter your email"
              value={inputs.email}
              variant='filled' 
              margin='normal'/>

            <FormLabel sx={{fontFamily: "quicksand"}} >Image URL</FormLabel>
            <TextField 
              onChange={handleChange}
              name="imageURL"
              value={inputs.imageURL}
              variant='standard' 
              margin='normal'/>


            <FormLabel sx={{fontFamily: "quicksand"}} >Phone Number</FormLabel>
            <TextField 
              onChange={handleChange}
              name="location"
              value={inputs.location}
              variant='standard' 
              margin='normal'/>

            <Button 
              type= "submit"
              color="warning" 
              sx={{width:"50%" ,margin:"auto",mt: 2, borderRadius:7}} 
              variant="contained"
            >Post
            </Button>

          </Box>
        </form>
    </Box>
  )
}

export default Order