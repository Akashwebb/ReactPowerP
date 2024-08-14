import React, { useState } from "react";
import "./popup.css";
// import Header from "../Header/header";

const SystemAdmin = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const handleAddUserForm = () => {
    setDisplayForm(true);
  };

  const handleCloseForm = () => {
    setDisplayForm(false);
  };

  return (
    <>
      {/* <Header /> */}

      <div className={`background-overlay ${displayForm ? "active" : ""}`}>
        <section className="user-management">
          <section id="systemAdmin_button">
            <h2>User Management</h2>
            <button id="addUserBtn" onClick={handleAddUserForm}>
              Add User
            </button>
          </section>

          <table className="systemAdmin_table">
            <thead>
              <tr className="systemAdmin_row">
                <th>User ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>john_doe</td>
                <td>john@example.com</td>
                <td>Administrator</td>
                <td>
                  <button className="editUserBtn" data-user-id="1">
                    Edit
                  </button>
                  <button className="resetPasswordBtn" data-user-id="1">
                    Reset Password
                  </button>
                  <button className="deleteUserBtn" data-user-id="1">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="audit-reports">
          <h2>Audit Reports</h2>
          <table>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>User</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-04-20 10:15:22</td>
                <td>john_doe</td>
                <td>Login</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {displayForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseForm}>
              &times;
            </span>
            <h2 id="userModalTitle">Add User</h2>

            <form id="userForm">
              <input type="hidden" id="userId" name="userId" />
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="role">Role:</label>
              <select id="role" name="role" required>
                <option value="Administrator">Administrator</option>
                <option value="Manager">Manager</option>
                <option value="User">User</option>
              </select>
              <button type="submit" id="submitUserBtn">
                Add User
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SystemAdmin;
