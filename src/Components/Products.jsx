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
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
//
//
import {useDispatch} from "react-redux";
import Swal from "sweetalert";


const myStyle ={
    display:"flex",
    flexDirection:"row",
}
const Products = () => {

    const [prods, setProds] = useState([]);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    useEffect(()=>{
            myProducts();
    },[])

    const myProducts = async () =>{
        let resp =  await axios.get('https://fakestoreapi.com/products');
        setProds(resp.data);
        console.log("my products=====>",resp.data);
        setShow(!show);

    }
    //
    const addProducts = (id, title, price) =>{
        // alert(id);
        if(localStorage.getItem('myCart') != undefined){
            let arr = JSON.parse(localStorage.getItem('myCart'));
            
            if(arr.includes({id, title, price})){
                Swal("Already added");
                dispatch({type:"ADD_PROD", payload:1});
            }else{
                arr.push({id, title, price});
                localStorage.setItem('myCart',JSON.stringify(arr));
                Swal("Added Successfully","","success");
                dispatch({type:"ADD_PROD", payload:1});
            }
        }else{
            let arr = [];
            arr.push({id, title, price});
            localStorage.setItem('myCart',JSON.stringify(arr));
            Swal("Added Successfully","","success");
            dispatch({type:"ADD_PROD", payload: 1});
        }
    }
    return (
        <div>
            <MyNav />
            <br />
            {!show ? (<Stack spacing={1} style={myStyle}>
                        <Skeleton variant="rectangular" width={210} height={500} width={400} style={{margin:"2rem"}}/>
                        <Skeleton variant="rectangular" width={210} height={500} width={400} style={{margin:"2rem"}}/>
                        <Skeleton variant="rectangular" width={210} height={500} width={400} style={{margin:"2rem"}}/>
                        </Stack>
    ) : (
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
                                <Button variant="outlined" size="small" style={{marginLeft:"6rem"}} onClick={()=> addProducts(vals.id, vals.title, vals.price)}>Add To Cart</Button>
                                {/* <Button size="small">Learn More</Button> */}
                            </CardActions>
                        </Card>
                    )
                })}
                </div>

            )}
            
        </div>
    );
};

export default Products;
