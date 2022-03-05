import React from 'react'
import CustomBtn from './CustomBtn'
import erch from '../erch.png'
import {Toolbar, Typography} from '@mui/material'
import {makeStyles} from "@mui/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                
                <img src={erch} className={classes.erch}/> 
                
                <Typography variant="h6" className={classes.menuItem}>
                   Нүүр
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Мэдээлэл
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Үйлчилгээ
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Цаг авах 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Бидэнтэй холбогдох 
                </Typography>
                <CustomBtn txt="Бүртгүүлэх"/>
            </Toolbar>
    )
}

export default NavBar