import React, { useEffect } from "react";
import Users from "../components/Users";
import { connect } from "react-redux";
import { getUsers } from "../modules/users";
import { Preloader } from "../lib/PreloadContext";

const UsersContainer = ({ users, getUsers }) => {
  useEffect(() => {
    if (users) return;
    getUsers();
  }, [getUsers, users]);
  return (
    <div>
      <Users users={users} />
      <Preloader resolve={getUsers} />
    </div>
  );
};

export default connect(
  (state) => ({
    users: state.users.users,
  }),
  { getUsers }
)(UsersContainer);
