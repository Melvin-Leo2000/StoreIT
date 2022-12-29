import React from 'react'
import axios from 'axios'
import { Box, FormLabel, TextField, Typography, Button } from '@mui/material'
import { useState } from 'react';
import Categories from '../components/Categories';
import CardImageSmall from '../components/CardImageSmall';
import CardImageOdd from '../components/CardImageOdd';
import CardImageLarge from '../components/CardImageLarge';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

function Order() {

    const initialState = {
      name: '', 
      date: '', 
      email: '', 
      number : '' ,
      smallboxes: 0, 
      largeboxes: 0,
      oddboxes: 0,
     }

    const [inputs, setInputs] = useState(initialState)

    const {name, date,  email, number} = inputs
    
    const handleChange = e => {
      const {name, value} = e.target
      setInputs({...inputs, [name]:value})
    }


    const handleSubmit = async e => {
        e.preventDefault()

        try {
          const res = await axios.post('/users/order', {
              name, date, email, number
          })
          window.location.replace("/thanks");
          
        //here shoould send back the status to check fpor the status validation
        setInputs({...inputs, err: '', success: res.data.msg})

      } catch (err) {
        err.response.data.msg && 
        setInputs({...inputs})
      }
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
              
            <FormLabel sx={{fontFamily: "quicksand"}}>Name: </FormLabel>
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

            <FormLabel sx={{fontFamily: "quicksand"}}>NUS Email</FormLabel>
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
              label='Number'
              placeholder="Enter your Phone Number"
              value={inputs.number}
              variant='filled' 
              required
              margin='normal'/>

            <CardImageSmall/>

            <CardImageLarge />

            <CardImageOdd /> 

            <FormLabel sx={{fontFamily: "quicksand"}} >Small Boxes</FormLabel>
            <TextField 
              onChange={handleChange}
              name="smallboxes"
              label="Quantity of Small Boxes"
              placeholder='Enter your quantity'
              value={inputs.smallboxes}
              variant='filled' 
              type='number'
              required
              margin='normal'/>
            <FormLabel sx={{fontFamily: "quicksand"}} >Large Boxes</FormLabel>
            <TextField 
              onChange={handleChange}
              name="largeboxes"
              label="Quantity of Large Boxes"
              placeholder='Enter your quantity'
              value={inputs.largeboxes}
              variant='filled' 
              type='number'
              required
              margin='normal'/>
            <FormLabel sx={{fontFamily: "quicksand"}} >Odd-Size Items/Luggage case</FormLabel>
            <TextField 
              onChange={handleChange}
              name="oddboxes"
              label="Quantity of Odd-Size Items/Luggage case"
              placeholder='Enter your quantity'
              value={inputs.oddboxes}
              variant='filled' 
              type='number'
              required
              margin='normal'/>

            <FormLabel sx={{fontFamily: "quicksand"}} margin='normal' >Residence</FormLabel>
            <FormControl margin='normal'variant="filled" sx={{fontFamily: "quicksand"}}>
              <InputLabel id="demo-simple-select-helper-label">Residence</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="Residence"
                value={inputs.residence}
                label="Residence"
                required
                margin='normal'
                onChange={handleChange}
              >
                <MenuItem value={"10"}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>



            {/*
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
            */}

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