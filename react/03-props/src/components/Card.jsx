import React from 'react'

const Card = (props) => {
    console.log(props.user);
    console.log(props.age);
    
  return (
    <div className="parent">
         <div className="card">
        <h1>{props.user} </h1>
         <img  src={props.img}>
        </img>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque a animi, vitae voluptatem illum nostrum. Quos quis animi aliquam soluta.</p>
       
        <button>View Profile</button>
      </div>
     </div>
  )
}

export default Card
