import React, {useState, useEffect} from 'react';
import MyNav from "./MyNav";
//
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert";
import {useSelector, useDispatch } from "react-redux";

const myStyle = {
    mainCard:{
        height:"11rem", 
        width:"60rem", 
        margin:"20px",
    },
    btn_1:{
        padding:"10px",
        width:"20rem"
    }
}


const AddedProds = () => {
    const [data, setData] = useState([]);
    console.log("storage data in state===>", data);

    const dispatch = useDispatch()
    const selectPrice = useSelector((state)=> state.total);
    const navigate = useNavigate();

    useEffect(()=>{
        let localData = JSON.parse(localStorage.getItem('myCart'));
        console.log("local data===>",localData);
        setData(localData);

        //
        
    },[])
    
    const emptyList = ()=>{
        let updatedList = localStorage.removeItem('myCart');
        Swal("Emptied");
        setData(updatedList);
        dispatch({type:"ADD_PROD", payload: undefined })
        navigate('/prods');
    }

    
    const removeItem = (id)=>{
        Swal(`ID: ${id}`)        
    }
    return (
        <div>
            <MyNav />
            <br />
            <Button variant="contained" style={myStyle.btn_1} onClick={()=> emptyList()}>Empty List</Button>
            <br />
            {data && data.map((vals)=>{
                return(
                    <Card sx={{ minWidth: 275 }} style={myStyle.mainCard} >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{vals.id}</Typography>
                            <Typography variant="h5" component="div">{vals.title}</Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">Rs. {vals.price} /-</Typography>
                        </CardContent>
                        {/* <CardActions style={{marginLeft:"25rem"}}>
                            <Button variant="outlined" size="small" onClick={()=>removeItem(vals.id)}>Total</Button>
                        </CardActions> */}
                    </Card>
                )
            })}
            <Button variant="outlined" color="warning" onClick={()=> dispatch({type:"TOTAL_PRICE", 
            payload:data.map((vals)=> vals.price)})}>CheckOut</Button>
            <h4>Total Cost:{selectPrice}</h4>
            
        </div>
    );
};

export default AddedProds;