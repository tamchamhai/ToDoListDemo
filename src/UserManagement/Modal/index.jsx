import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserAction, updateUserAction } from "../../redux/action/userAction";
// import userReducer from "../../redux/reducers/userReducer";

class Modal extends Component {
  state = {
    username: "",
    name: "",
    email: "",
    phoneNumber: "",
    type: "",
  };
  handleChange = (event) => {
    const element = event.target; // Dom tới element dc gõ
    const { value, name } = element;
    this.setState({
      [name]: value, // do name của input trùng với key của state
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { id } = this.state;
    if (id) {
      // edit
      this.props.updateUser(this.state);
    } else {
      // add
      this.props.addUser(this.state);
    }
  };

  render() {
    const { username, name, phoneNumber, email, type } = this.state;
    console.log(this.state);
    console.log(this.props);
    return (
      <div
        className="form-user modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ADD USER</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.handleChange}
                    value={name}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    onChange={this.handleChange}
                    value={phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    name="type"
                    onChange={this.handleChange}
                    value={type}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps: ");
    // console.log(prevProps);
    // console.log("current props: ");
    // console.log(this.props);
    //điều kiện dừng
    if (this.props.userEdit !== prevProps.userEdit) {
      this.setState({
        ...this.props.userEdit,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    userEdit: state.userReducer.userEdit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      // dispatch action lên user
      dispatch(addUserAction(user));
    },
    updateUser: (user) => {
      dispatch(updateUserAction(user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
