import React from 'react'
import { Box, FormLabel, TextField, Typography, Button } from '@mui/material'
import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

function Order() {
    const [post, setPost] = useState()
    const [inputs, setInputs] = useState({
        name: "", 
        email: "", 
        date: "", 
        number : "", 
        address: "", 
        date: "",
        residence: "",
        price: "",
        size: ""
    })
    
    const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState, 
          [e.target.name]: e.target.value, 
        }))
    
      }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
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
                Order with us!
            </Typography>
        </Box>
        <Box display="flex" margin= "auto" padding={2}>
          <Typography>
            You can add description here
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
             margin='normal' 
             required
             />

            <FormLabel sx={{fontFamily: "quicksand"}}>Desired Date of collection</FormLabel>
            <TextField 
              onChange={handleChange}
              name="date"
              type="date"
              value={inputs.date}
              variant='outlined' 
              required
              margin='normal'/>

            <FormLabel sx={{fontFamily: "quicksand"}}>NUS email</FormLabel>
            <TextField 
              onChange={handleChange}
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              value={inputs.email}
              variant='filled' 
              required
              margin='normal'/>

            <FormLabel sx={{fontFamily: "quicksand"}} >Phone Number</FormLabel>
            <TextField 
              onChange={handleChange}
              name="number"
              type="number"
              label='Number'
              placeholder="Enter your Number"
              value={inputs.number}
              variant='filled' 
              required
              margin='normal'/>

            <FormLabel sx={{fontFamily: "quicksand"}} >Delivery Address</FormLabel>
            <TextField 
              onChange={handleChange}
              name="address"
              label='Delivery Address'
              placeholder='Enter your Delivery Address'
              value={inputs.imageURL}
              variant='filled' 
              required
              margin='normal'/>

            <FormLabel sx={{fontFamily: "quicksand"}} >Residence</FormLabel>
            <TextField 
              onChange={handleChange}
              name="residence"
              label="Residence"
              placeholder='Enter your residence'
              value={inputs.residence}
              variant='filled' 
              required
              margin='normal'/>

            <FormLabel sx={{fontFamily: "quicksand"}} margin='normal' >Size</FormLabel>
            <FormControl variant="filled" sx={{fontFamily: "quicksand"}}>
              <InputLabel id="demo-simple-select-helper-label">Size</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="size"
                value={inputs.size}
                label="Size"
                required
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <Button 
              type= "submit" 
              sx={{width:"50%" ,margin:"auto",mt: 2, borderRadius:7}} 
              variant="contained"
            >Submit
            </Button>

          </Box>
        </form>
    </Box>
  )
}

export default Order