import React from 'react';
import {AppBar, Box, Toolbar} from '@material-ui/core';
import {Link} from "react-router-dom";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {useSelector} from "react-redux";


const myStyle = {
    height:"5rem",
    Link:{
        color:"white",
        textDecoration:"none",
        fontWeight:"bold",
        fontSize:"1.8rem",
        margin:"2rem",
    }
}

const MyNav = () => {
    const selector = useSelector((state)=> state.count);
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={myStyle}>
                    <Toolbar>
                        <Link to="/home" style={myStyle.Link}>Home</Link>
                        <Link to="/addemp" style={myStyle.Link}>Add Employees</Link>
                        <Link to="/prods" style={myStyle.Link}>Products</Link>
                        <Link to="/added" style={myStyle.Link}><ShoppingCartOutlinedIcon/>{selector}</Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default MyNav;