import React, {useEffect, useState} from 'react';
import MyNav from "./MyNav";
import { Button, TextField } from '@material-ui/core';
import { getApiById, putEmpDetails } from '../Services/API';
import { useNavigate, useParams } from 'react-router-dom';

const initialValues = {
    ename:"",
    age:"",
    city:"",
    gender:"",
    salary:""
}

const EditEmp = () => {
    const [data, setData] = useState(initialValues);
    const { ename, age, city, gender, salary} = data;

    const { id } = useParams();
    console.warn("my ID--->",id);
    const navigate = useNavigate();
    
    const getInputData = (e) =>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }

    useEffect(()=>{
        getDataById(id);
    },[])

    const getDataById = async(id) =>{
        let resp = await getApiById(id);
        setData(resp.data);
        console.log("response data===>",resp);
    }

    const postEditedData = async () =>{
        await putEmpDetails (id, data);
        navigate('/home');
        
    }

    return (
        <div>
            <MyNav />
            <form>
            <TextField id="standard-basic" label="Enter Name" variant="standard" onChange={(e)=> getInputData(e)} name="ename" value={ename}/>
            <br /><br />
            <TextField id="standard-basic" label="Enter Age" variant="standard" onChange={(e)=> getInputData(e)} name="age" value={age}/>
            <br /><br />
            <TextField id="standard-basic" label="Enter City" variant="standard" onChange={(e)=> getInputData(e)} name="city" value={city}/>
            <br /><br />
            <TextField id="standard-basic" label="Enter Gender" variant="standard" onChange={(e)=> getInputData(e)} name="gender" value={gender}/>
            <br /><br />
            <TextField id="standard-basic" label="Enter Salary" variant="standard" onChange={(e)=> getInputData(e)} name="salary" value={salary}/>
            <br /><br />
            <Button variant='outlined' color="primary" onClick={()=>postEditedData()}>Edit Employee</Button>

            </form>
        </div>
    );
};

export default EditEmp;