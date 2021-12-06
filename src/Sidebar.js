import React from "react";
import { connect } from "react-redux";

import cx from "classnames";

class Sidebar extends React.Component {
 
  
  render() {
    return (
      <aside id="sidebar">
        <div >
      
        </div>
        <div id="sidebar-right">
          <h3>My App</h3>
         <button >Form</button> 
        
        <br/>
         <br/>
           <button >Some Link I</button> 
 <br/>
  <br/>
           <button >Some Link II</button> 
            <br/>
             <br/>
        </div>
      </aside>
    );
  }
}

const mapStateToProps = state => {
  return {
  
    person: state.person
  };
};

export default connect(mapStateToProps)(Sidebar);
