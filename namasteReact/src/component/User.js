import { useState } from "react";

const User = ({name})=>{
    const [count]=useState(0)
    const [count2]=useState(2)
    return <div className="user-card m-4 p-4 bg-gray-50 rounded-lg ">

        <h2>Name: {name}</h2>
        <h2>Count:{count}</h2>
        <h2>Count2:{count2}</h2>
        <h3>Location:Bangaluru</h3>
        <h4>Contact:Ashutosh-7Singh</h4>
    </div>
}
export default User;