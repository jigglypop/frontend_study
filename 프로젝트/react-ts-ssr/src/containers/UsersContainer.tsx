import React, { useEffect } from "react";
import Users from "../components/Users";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../modules/users";
import { usePreloader } from "../lib/PreloadContext";

const UsersContainer = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  usePreloader(() => dispatch(getUsers()));
  useEffect(() => {
    if (users) return;
    dispatch(getUsers());
  }, [dispatch, users]);

  if (!users) return null;
  return <Users users={users} />;
};

export default UsersContainer;
