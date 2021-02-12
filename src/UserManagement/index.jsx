import React, { Component } from "react";
import Search from "./Search";
import UserList from "./UserList";
import Modal from "./Modal";

class UserManagement extends Component {
  render() {
    return (
      <section className="user-managerment container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <UserList />
        {/* Model */}
        <Modal />
      </section>
    );
  }
}
export default UserManagement;
