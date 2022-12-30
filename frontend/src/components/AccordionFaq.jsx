import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card } from '@mui/material';
import { borderColor } from '@mui/system';
export default function AccordionFaq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Box
        width='100%'
        margin= 'auto'
        paddingBottom={2}
        flexDirection={'column'}
        justifyContent="center" 
        sx={{borderColor: 'secondary.main'}}
      >
        <Typography>Common questions from fellow students:</Typography>
      </Box>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
              Where is the collection point for collection/return runs?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The collection point will be at the dropoff point at the main entrance of your respective hall/residence where food is usually dropped off.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>When will the collection period begin?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It can happen anytime, as long as you make an order for the date of collection. Feel free to contact us for additional information regarding collection.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            What happens if I need to change my collection date / return date?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Drop us a message under contacts and we will update on our end accordingly!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Is there insurance for my items?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes of course! We will reimburse any cost if the item gets damaged in the moving process if unlikely circumstances like this were to happen. 
          </Typography>
          <Typography>
            However, be sure to do your own due diligence and ensure your items are in proper condition before storing it with us.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Help! I am unsure of how much space I need to purchase!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Not to worry, just send a picture to us via our telegram (click on contact) and we will help you estimate the space required!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}