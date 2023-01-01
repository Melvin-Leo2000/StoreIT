import * as React from 'react';
import axios from 'axios'
import { Box, FormLabel, TextField, Typography, Button, Paper } from '@mui/material'
import { useState } from 'react';
import CardImageSmall from '../components/CardImageSmall';
import CardImageOdd from '../components/CardImageOdd';
import CardImageLarge from '../components/CardImageLarge';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TwoK } from '@mui/icons-material';

function Order() {

    const initialState = {
      name: '', 
      date: '',
      datetwo: '', 
      email: '', 
      number : '' ,
      smallboxes: 0, 
      largeboxes: 0,
      oddboxes: 0,
      residence: '',
      price: 0,
      duration: 0
     }
     

    const [inputs, setInputs] = useState(initialState)
    const [value, setValue] = React.useState(null);
    const [valuetwo, setValuetwo] = React.useState(null);

    const {name, date, datetwo, email, number, smallboxes, largeboxes, oddboxes, residence, price, duration} = inputs
    
    const handleChange = e => {
      const {name, value} = e.target
      if (e?.key === '-' || e?.key === '+') {
        e.preventDefault();
      }
      setInputs({...inputs, [name]:value})
    }


  


    const handleSubmit = async e => {
        e.preventDefault()

        try {
          const res = await axios.post('/order', {
              name, date, datetwo, email, number, smallboxes, largeboxes, oddboxes, residence, price
          })
          window.location.replace("/thanks");
          
        //here shoould send back the status to check fpor the status validation
        setInputs({...inputs, err: '', success: res.data.msg})

      } catch (err) {
        err.response.data.msg && 
        setInputs({...inputs})
      }
    }

    const getTotal = () => {
      let totalcost = 0.00;
      totalcost = duration * (smallboxes * 8.00 + largeboxes * 15.00 + oddboxes * 22.00)
      return totalcost
    }
    
    return (
    
    <Box 
        display = "flex" 
        flexDirection={"column"} 
        width= "100%"
        height="100%"
        paddingTop={10}
        paddingLeft={2}
        paddingRight={2}
    >
        <Box display="flex" margin= "auto" padding={1}>
            <Typography fontWeight={'bold'} variant='h4' textAlign={'center'} fontFamily={"dancing script"}>
                Storage order
            </Typography>
        </Box>
        <Box display="flex" margin= "auto" textAlign={'center'} padding={1}>
          <Typography>
            Include your details and the number of items you would like to store with us here!
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box 
            padding={3} 
            display="flex" 
            margin = "auto"
            width="100%" 
            flexDirection={"column"}>
              
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
             
            <FormLabel sx={{fontFamily: "quicksand"}} >Telegram handle / Phone number:</FormLabel>
            <TextField 
              onChange={handleChange}
              name="number"
              label='Number'
              placeholder="Enter your Phone Number"
              value={inputs.number}
              variant='filled' 
              required
              margin='normal'/>


            <FormLabel sx={{fontFamily: "quicksand"}}>School Email / Personal Email</FormLabel>
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

            <FormLabel sx={{fontFamily: "quicksand"}}>Desired Date of collection</FormLabel>
            <TextField 
              onChange={handleChange}
              name="date"
              type="date"
              value={inputs.date}
              variant='outlined' 
              required
              margin='normal'/>

            <FormLabel sx={{fontFamily: "quicksand"}}>Time of collection</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Collection Time"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params}
                required
                margin='normal' />}
              />
            </LocalizationProvider>


            <FormLabel sx={{fontFamily: "quicksand"}}>Desired Date of return</FormLabel>
            <TextField 
              onChange={handleChange}
              name="datetwo"
              type="date"
              value={inputs.datetwo}
              variant='outlined' 
              required
              margin='normal'/>

            <FormLabel sx={{fontFamily: "quicksand"}}>Time of return (feel free to leave this blank if you are unsure, and just drop us a message under contact nearer to the date!) </FormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Return Time"
                value={valuetwo}
                onChange={(newValue) => {
                  setValuetwo(newValue);
                }}
                renderInput={(params) => <TextField {...params}
                margin='normal' />}
              />
            </LocalizationProvider>



            <CardImageSmall/>
            <FormLabel sx={{fontFamily: "quicksand"}} >Small items</FormLabel>
            <TextField 
              onChange={handleChange}
              name="smallboxes"
              label="Quantity of Small Boxes"
              placeholder='Enter your quantity'
              value={inputs.smallboxes}
              InputProps={{
                inputProps: { 
                    min: 0
                }
              }}
              variant='filled' 
              type='number'
              required
              margin='normal'/>

            <CardImageLarge />
            <FormLabel sx={{fontFamily: "quicksand"}} >Large items</FormLabel>
            <TextField 
              onChange={handleChange}
              name="largeboxes"
              label="Quantity of Large Boxes"
              placeholder='Enter your quantity'
              value={inputs.largeboxes}
              InputProps={{
                inputProps: { 
                    min: 0
                }
              }}
              variant='filled' 
              type='number'
              required
              margin='normal'/>

            <CardImageOdd /> 
            <FormLabel sx={{fontFamily: "quicksand"}} >Huge items</FormLabel>
            <TextField 
              onChange={handleChange}
              name="oddboxes"
              label="Quantity of Odd-Size Items/Luggage case"
              placeholder='Enter your quantity'
              value={inputs.oddboxes}
              InputProps={{
                inputProps: { 
                    min: 0
                }
              }}
              variant='filled' 
              type='number'
              required
              margin='normal'/>


            <TextField 
              onChange={handleChange}
              name="duration"
              label="Duration of Storage"
              placeholder='No. of months'
              value={inputs.duration}
              InputProps={{
                inputProps: { 
                    min: 0
                }
              }}
              variant='filled' 
              type='number'
              required
              margin='normal'/>

            <FormLabel sx={{fontFamily: "quicksand"}} margin='normal' >Residence</FormLabel>
            <FormControl required margin='normal'variant="filled" sx={{fontFamily: "quicksand"}}>
              <InputLabel id="demo-simple-select-helper-label">Residence</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="residence"
                value={inputs.residence}
                label="Residence"
                margin='normal'
                onChange={handleChange}
              >
                <MenuItem value={"UTR"}>UTR</MenuItem>
                <MenuItem value={'PGPR'}>PGPR</MenuItem>
                <MenuItem value={'PGPH'}>PGPH</MenuItem>
                <MenuItem value={'RVRC'}>RVRC</MenuItem>
                <MenuItem value={'PGPH'}>PGPH</MenuItem>
                <MenuItem value={'RC4'}>RC4</MenuItem>
                <MenuItem value={'CAPT'}>CAPT</MenuItem>
                <MenuItem value={'Kent Ridge'}>Kent Ridge</MenuItem>
                <MenuItem value={'King Edwards VII'}>King Edwards VII</MenuItem>
                <MenuItem value={'Raffles'}>Raffles</MenuItem>
                <MenuItem value={'Sheares'}>Sheares</MenuItem>
                <MenuItem value={'Temasek'}>Temasek</MenuItem>
                <MenuItem value={'NUS College (Cinnamon and west wing)'}>NUS College (Cinnamon and west wing)</MenuItem>
              </Select>
            </FormControl>


            <FormLabel sx={{fontFamily: "quicksand", paddingBottom: 2}} margin='normal' >Additional notes for us</FormLabel>
            <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 0, width: "100%" }
                  }}
                  noValidate
                  autoComplete="off"
                >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          
        />
      </div>

            </Box>

            <Box padding={2}>
            </Box>
            <Paper
              elevation={12}
              
              >
              <Typography
                padding= {6}
                textAlign={'center'}
                fontSize={18}
              >
                Your Total Price: $ {getTotal()}
              </Typography>
            </Paper>
            <Box padding={2}>
            </Box>

            <FormLabel sx={{fontFamily: "quicksand"}} >Method of Payment</FormLabel>


            <Button 
              type= "submit" 
              sx={{width:"50%" ,margin:"auto",mt: 2, borderRadius:7}} 
              variant="contained"
            >StoreIT
            </Button>

          </Box>

        </form>
    </Box>
  )
}

export default Order