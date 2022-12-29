import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import oddSizeImage from '../assets/oddSizeBoxes.jpg'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function CardImageOdd() {
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
            <Img alt="odd-box" src={oddSizeImage} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Storage Space, Odd-Sized Items/Luggage case
              </Typography>
              <Typography variant="body2" gutterBottom>
              Select this if your item is over the size of a large box, fragile or requires special handling
              </Typography>
              <Typography variant="body2" color="text.secondary">
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Things that fit: Portable Air Con, Bicycle, Small Furniture
Do purchase multiple quantities of this item if you have multiple items that are above the large boxes size
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
                $22.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}