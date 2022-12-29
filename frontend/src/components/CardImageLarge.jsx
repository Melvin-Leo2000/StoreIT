import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import largeBoxImage from '../assets/largeBoxes.jpg'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function CardImageLarge() {
    
  return (
    <Paper
    variant="outlined"
      sx={{
        p: 5,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        
      }}
    >
      <Grid container spacing={3}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="small-box" src={largeBoxImage} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Storage Space, Large Boxes
              </Typography>
              <Typography variant="body2" gutterBottom>
                Dimensions: 60cm (L) x 35cm (W) x 40cm (H)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Approximately the content of a small suitcase
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Things that fit: Clothing & Accessories, Kitchen equipment,              
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
                $15.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}