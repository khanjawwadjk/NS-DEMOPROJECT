import React, {useState} from "react";

export const Practice = (props) =>{
    const [toggle, setToggle] = useState(false);
    console.log("toggle value===>",toggle);
    const myName = "Jawwad";
    const myName2 = "Khan";
    return(
        <div>
            My Name is {props.details.name}.
            My Age is {props.details.age}.
            <hr />

            {/* {myName} */}
            {toggle ? "Jawwad" : "Khan"}
            <br />
            <button onClick={()=> setToggle(!toggle)}>Toggle Name</button>
        </div>
    )
}