import React, {useState} from 'react';
import MyNav from "./MyNav";
import { Button, TextField } from '@material-ui/core';
import { postAPI } from '../Services/API';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    ename:"",
    age:"",
    city:"",
    gender:"",
    salary:""
}

const AddEmp = () => {
    const [data, setData] = useState(initialValues);
    const {ename, age, city, gender, salary} = data;

    const navigate = useNavigate();
    
    const getInputData = (e) =>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }
    const postData = async () =>{
        await postAPI(data);
        console.log("post data===>",data);
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
            <Button variant='outlined' color="primary" onClick={()=>postData()}>Add Employee</Button>
            </form>
        </div>
    );
};

export default AddEmp;