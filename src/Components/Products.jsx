import React, { useState, useEffect } from 'react';
import MyNav from "./MyNav";
import axios from 'axios';
//
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//
import {useDispatch} from "react-redux";
import Swal from "sweetalert";

const Products = () => {
    const [prods, setProds] = useState([]);

    const dispatch = useDispatch();

    useEffect(()=>{
        myProducts();
    },[])

    const myProducts = async () =>{
        let resp =  await axios.get('https://fakestoreapi.com/products');
        setProds(resp.data);
        console.log("my products=====>",resp.data);

    }
    //
    const addProducts = (id, title) =>{
        // alert(id);
        if(localStorage.getItem('myCart') != undefined){
            let arr = JSON.parse(localStorage.getItem('myCart'));
            if(arr.includes(id)){
                Swal("Already added");
                dispatch({type:"ADD_PROD", payload:1});
            }else{
                arr.push(id);
                localStorage.setItem('myCart',JSON.stringify(arr));
                Swal("Added Successfully","","success");
                dispatch({type:"ADD_PROD", payload:1})
            }
        }else{
            let arr = [];
            arr.push(id);
            localStorage.setItem('myCart',JSON.stringify(arr));
            Swal("Added Successfully","","success");
            dispatch({type:"ADD_PROD", payload: 1})
        }
    }
    return (
        <div>
            <MyNav />
            <br />
            <div style={{display:"flex", flexWrap:"wrap"}}>
            {prods.map((vals)=>{
                return(
                    <Card sx={{ maxWidth: 345 }} key={vals.id} style={{margin:"2rem", width:"20rem"}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={vals.image}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{vals.title}</Typography>
                            <Typography variant="body2" color="text.secondary">{vals.description}</Typography>
                            <Typography variant="body2" color="text.secondary">Rs. {vals.price} /-</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" size="small" style={{marginLeft:"6rem"}} onClick={()=> addProducts(vals.id, vals.title)}>Add To Cart</Button>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                )
            })}
            </div>
        </div>
    );
};

export default Products;
