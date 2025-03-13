import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Ashutosh ",
        location: "Default",
        avatar_url:"dummy url"
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Ashutosh-7singh");
    const json = await data.json();
this.setState(
    {
        userInfo:json
    }
)
    console.log(json);
  }
  render() {
    const {name,location,avatar_url}=this.state.userInfo
    return (
      <div>
        <h1>name:{name}</h1>
        <div>
          loggedIn User:<UserContext.Consumer>
            {({loggedInUser})=><h1 className="text-2xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>location:{location}</h2>
        <img src={avatar_url}/>
        <UserClass name={"First"} location={"Muzaffarpur class"} />
      </div>
    );
  }
}
export default About;

// import User from "./User";
// import UserClass from "./UserClass";
// const About =()=>{
//     return <div>
//         <h1>This is About Us Page</h1>
//         <h2>This is namaste React Web series</h2>
//         <User name={"Ashutosh Singh (function)"}/>
//         <UserClass name={"Ashutosh singh (class)"} location={"Dehradun class"}/>
//     </div>
// }
// export default About;
