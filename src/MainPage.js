import React from "react";
import { connect } from "react-redux";

import { updateName, updateAge, all_persons } from "./person";



//postaviti univerzalno, kopirana forma radi testa
class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.submitPerson = this.submitPerson.bind(this);
    this.handleUpdateAge = this.handleUpdateAge.bind(this);
    this.handleUpdateName = this.handleUpdateName.bind(this);

     this.handleChangeNamesetGender = this.handleChangeNamesetGender.bind(this);

  }
  submitPerson() {
   this.props.dispatch(all_persons({}));
  }

  handleUpdateName(e) {
    this.props.dispatch(updateName(e.target.value));
  }

  handleUpdateAge(e) {
    this.props.dispatch(updateAge(e.target.value));
  }


    handleChangeNamesetGender(e) {
    //this.props.dispatch(updateAge(e.target.value));
  }

  render() {
    return (
      <main id="main-body">
       
        <div>
          <input
            onChange={this.handleUpdateName}
            value={this.props.person.name}
            placeholder="Enter  name"
          />
        </div>
        <div>
          <input
            onChange={this.handleUpdateAge}
            value={this.props.person.age}
            placeholder="Update person age"
          />
        </div>

          <div onChange={this.handleChangeNamesetGender}>
        <input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female
      </div>

       <button id="button" onClick={this.submitPerson}>Submit</button>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  
  person: state.person
});

export default connect(mapStateToProps)(MainPage);
