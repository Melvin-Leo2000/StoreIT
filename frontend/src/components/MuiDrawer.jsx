import React, { useState } from 'react'
import { Box, Drawer, IconButton, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
function MuiDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
        <IconButton sx={{marginLeft: 'auto'}} size='large' color='primary' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
            <Menu />
        </IconButton>
        <Drawer 
            anchor='right'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
        >
            <Box p={2} width="250px" textAlign="center" role="presentation">
                <Typography variant='h6' component="div">
                    Navigation
                </Typography>
            </Box>
        </Drawer>
    </>
  )
}

export default MuiDrawer