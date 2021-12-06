import React from "react";
import { connect } from "react-redux";

import cx from "classnames";

class Sidebar extends React.Component {

  render() {
    return (
  

   <table className="table">
          <thead>
            <tr>
              
              <th >Ime</th>
              <th >Prezime</th>
              <th >Godine</th>
              <th >Pol</th>

              <th >Da/Ne</th>
            </tr>
          <tbody>
          {this.props.person.all_persons.map((el) => (
            <tr >
              <td>{el.name}</td>
              <td>{el.surname}</td>
              <td>{el.age}</td>

               <td>{el.morw}</td>
                <td>{el.yesno}</td>
            </tr>
          ))}
        </tbody>
        </table>

        <button >>Dodaj</button>
    );
  }
}

const mapStateToProps = state => {
  return {
  
    person: state.person
  };
};

export default connect(mapStateToProps)(Sidebar);
