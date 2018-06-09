import React from 'react';
import { Link } from 'react-router'; //Link to create a link

const Main = React.createClass({
  render(){
    return(
      <div>
        <h1>
          <Link to = "/">Reduxstagram</Link>

        </h1>

        {React.cloneElement(this.props.children,this.props)} //the children of Main is single or photo-grid
      </div>
    )
  }
});

export default Main; //to export Main to Reduxstagram.js
