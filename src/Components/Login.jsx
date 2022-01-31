import React from 'react';
import {TextField, Button, Typography} from "@material-ui/core";
import "./login.css";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const myStyle = {
    width:"16rem",
    marginTop:"3rem",
    error:{
        color:"red",
        textAlign:"left",
        marginLeft:"3.3rem",
        marginTop:"5px",
    }
}

const initialVals = {
    name:"",
    password:""
}
const Login = () => {

    const { register, handleSubmit, getValues, formState: { errors } } = useForm(initialVals);
    const navigate = useNavigate();
    
    const nextPage = (data) =>{
        navigate("/home");
        console.log("my data==>",data);
    }

    return (
        <div className='form-div'>
            <h2>Login</h2>
            <hr />
           <form onSubmit={handleSubmit(nextPage)}> 
                <TextField id="standard-basic" label="Name" variant="standard"
                {...register("name", { required: true})} />
                <Typography style={myStyle.error}>{errors.name && "*This field is required."}</Typography>
                <br /><br />
                <TextField id="standard-basic" label="Password" type="password" variant="standard" 
                {...register("password", { required: true })} />
                <Typography style={myStyle.error}>{errors.password && "*This field is required."}</Typography>
                <br /><br />
                <Button variant="outlined" color="primary" size='large' type="submit" style={myStyle}>Login</Button>
           </form>
        </div>
    );
};

export default Login; 

//, pattern: /^[A-Za-z]+$/i