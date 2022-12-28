import React from 'react'
import {AppBar, Tab, Tabs, Toolbar, useMediaQuery, Typography } from "@mui/material"
import { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import MuiDrawer from './MuiDrawer';
function Navbar() {
    const linksArr = ["home", "about","pricing" ,"faq", "contact", "order"]
    const [value, setValue] = useState()
    const navigate = useNavigate()
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")

    return (
        
        <AppBar sx={{bgcolor: "transparent", position: "sticky"}}>
            <Toolbar>
                <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="primary"
                    onClick={() => {
                        navigate("/")
                        
                    }}
                    sx={{
                        "&:hover": {
                        cursor: "pointer",
                        },
                    }}
                    >
                    StoreIT
                </Typography>
                {/* DESKTOP NAV n Mobile NAV*/}
                {isNonMobileScreens ? (<Tabs TabIndicatorProps={{style: {backgroundColor: "white"}}} value={value} onChange={(e, val) => setValue(val)} sx={{ml: "auto", textDecoration: "none"}}>
                    {linksArr.map((link) => (
                        <Tab 
                            LinkComponent={Link}
                            to={`${link === "home" ? "/" : link}`}
                            sx={{textDecoration : "none", ":hover": {
                                textDecoration: "underline", 
                                textUnderlineOffset: "18px"
                            }}}key={link} label={link} />
                        ))}
                        </Tabs>) :         
                    <MuiDrawer />
                }
                    
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

