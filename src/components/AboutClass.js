import React from "react";

class About extends React.Component {

 constructor(props){
    super(props)

    }

this.state={    
    count:1
}
  render() {
    return (
      <div>
        <h2>Hello From About Section. How can I help you?</h2>
        <button onClick={buttonClicked} >Click Me! </button>
      </div>
    );
  }
}
