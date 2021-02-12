import React, { Component } from "react";
import User from "../User";
import { connect } from "react-redux";

class UserList extends Component {
  renderUserList = () => {
    const { userList, keyword } = this.props;
    return userList
      .filter((user) => user.username.includes(keyword))
      .map((user, index) => {
        return <User key={index} index={index} user={user} />;
      });
  };
  render() {
    return (
      <div className="user-list">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderUserList()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
    keyword: state.userReducer.keyword,
  };
};
export default connect(mapStateToProps, null)(UserList);
