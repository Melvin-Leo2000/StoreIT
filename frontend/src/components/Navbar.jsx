import React from 'react'
import {AppBar, Tab, Tabs, Toolbar} from "@mui/material"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const linksArr = ["home", "about","pricing" ,"faq", "contact", "order"]
    const [value, setValue] = useState()
    return (
        <AppBar sx={{bgcolor: "transparent", position: "sticky"}}>
            <Toolbar>
                <Tabs value={value} onChange={(e, val) => setValue(val)} sx={{ml: "auto", textDecoration: "none"}}>
                    {linksArr.map((link) => (
                        <Tab 
                            LinkComponent={Link}
                            to={`${link === "home" ? "/" : link}`}
                        sx={{textDecoration : "none", ":hover": {
                            textDecoration: "underline", 
                            textUnderlineOffset: "18px"
                        }}}key={link} label={link} />
                    ))}
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

