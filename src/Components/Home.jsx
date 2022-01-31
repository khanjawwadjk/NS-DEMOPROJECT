import React, {useState, useEffect} from 'react';
import MyNav from "./MyNav";
//
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@mui/material/Button'
//
import {getData, deleteData} from "../Services/API.js";
import {Link} from "react-router-dom";


const Home = () => {
    const [myData, setMyData] = useState([]);

    useEffect(()=>{
        getApiData();
    },[])

    const getApiData = async () =>{
        let resp = await getData();
        console.log("response===>",resp.data);
        setMyData(resp.data);
    }

    //
    const deleteProd = async (id)=>{
        await deleteData(id);
        getApiData();
    }
    return (
        <div>
            <MyNav />
            <br />
            <TableContainer component={Paper} style={{margin:"5rem", marginLeft:"15rem" ,width:"60%"}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell align="right"><b>Age</b></TableCell>
                            <TableCell align="right"><b>City&nbsp;</b></TableCell>
                            <TableCell align="right"><b>Gender&nbsp;</b></TableCell>
                            <TableCell align="right"><b>Salary&nbsp;</b></TableCell>
                            <TableCell align="right"><b>Actions&nbsp;</b></TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
                    {myData.map((vals)=>{
                        return(
                        <TableRow key={vals.id}>
                            <TableCell component="th" scope="row">{vals.ename}</TableCell>
                            <TableCell align="right">{vals.age}</TableCell>
                            <TableCell align="right">{vals.city}</TableCell>
                            <TableCell align="right">{vals.gender}</TableCell>
                            <TableCell align="right">{vals.salary}</TableCell>
                            <TableCell align="right">
                                <Link to={`editemp/${vals.id}`}>
                                <Button variant="outlined" color="warning">Edit</Button>
                                </Link>
                                <Button variant="outlined" color="error" onClick={()=> deleteProd(vals.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
       </Table>
       </TableContainer>

        </div>
    );
};

export default Home;