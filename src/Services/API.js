import axios from "axios";

const URL = "http://127.0.0.1:3003/employees";

export const getData = async() =>{
    return await axios.get(URL);
}

export const deleteData = async(id) =>{
    return await axios.delete(`${URL}/${id}`)
}

export const postAPI = async (data) =>{
    return await axios.post(URL, data)
}

export const getApiById = async(id) =>{
    return await axios.get(`${URL}/${id}`);
}

export const putEmpDetails = async (id, data) =>{
    return await axios.put(`${URL}/${id}`, data)
}