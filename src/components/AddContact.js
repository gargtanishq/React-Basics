import React from "react";
import "./AddContact.css";
// class component

class AddContact extends React.Component {
  state = {
    Fname: "",
    Lname: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.Fname === "" || this.state.Lname === "") {
      alert("Fill All Details");
      return;
    }
    this.props.AddContactHandler(this.state);
    this.setState({ Fname: "", Lname: "" });
  };

  render() {
    return (
      <div className="empContainer">
        <h2 id="addEmp"> Add Employee</h2>
        <form className="form " onSubmit={this.add}>
          <div className="fields">
            <div className="field ">
              <label>First Name</label>
              <input
                type="text"
                name="Fname"
                placeholder="First Name"
                value={this.state.Fname}
                onChange={(e) => this.setState({ Fname: e.target.value })}
              ></input>
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                name="Lname"
                placeholder="Last Name"
                value={this.state.Lname}
                onChange={(e) => this.setState({ Lname: e.target.value })}
              ></input>
            </div>
            <button className="button-blue">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
