/**
 * 1: bắt sự  kiện cho nút xóa
 * 2: import connect vào
 * 3: viết phường thức mapDispatchToProps
 * 4: cho mapDispatchToProps làm tham số thứ 2 của connect
 * 5: tạo constant, action dispatch action lên reducer
 * 6: tạo case làm giải thuật xóa (trong reducer có mãng và object thì phải clone bằng dấu ...)
 *
 * Questions: - Khi một phương thức nằm ngoài render thì phải truyền props
 *            - Khi kiểm tra trên Devstool có hiện action là truyền action thành công
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { delUserAction, editUserAction } from "../../redux/action/userAction";

class User extends Component {
  // constructor(props) {
  //   super(props);
  // }
  handleDelUser = (userID) => {
    this.props.delUser(userID);
    // console.log(userID);
  };
  handleEdit = (user) => {
    // code here
    const { editUser } = this.props;
    editUser(user);
  };
  render() {
    let { user, index } = this.props;
    return (
      <tr className="user-item">
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => this.handleEdit(user)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelUser(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delUser: (userID) => {
      // distch action lên reducer
      dispatch(delUserAction(userID));
    },
    editUser: (user) => {
      dispatch(editUserAction(user));
    },
  };
};
export default connect(null, mapDispatchToProps)(User);
