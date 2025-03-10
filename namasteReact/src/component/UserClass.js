import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
  
    };
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
     
        <h2>Count2:{count2}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:Ashutosh-7Singh</h4>
      </div>
    );
  }
}
export default UserClass;
