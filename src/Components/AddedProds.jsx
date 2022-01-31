import React from 'react';
import MyNav from "./MyNav";

let localData = localStorage.getItem('myCart');
console.log("local data",localData)

const AddedProds = () => {
    return (
        <div>
            <MyNav />
            <br />
               {localData.forEach((values)=>{
                   return(
                       <h5>{values}</h5>
                   )
               })}
        </div>
    );
};

export default AddedProds;