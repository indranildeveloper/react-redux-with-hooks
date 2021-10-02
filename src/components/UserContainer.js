import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return userData.loading ? (
    <h1>Loading...</h1>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h3>User List</h3>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((u) => {
            return <p>{u.name}</p>;
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
