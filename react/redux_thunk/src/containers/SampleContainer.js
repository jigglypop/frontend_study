import React, { useEffect } from "react";
import { getPost, getUsers } from "../modules/sample";
import Sample from "../components/Sample";
import { useDispatch, useSelector } from "react-redux";

export default function SampleContainer() {
  const { post, users, loadingPost, loadingUsers } = useSelector(
    ({ sample, loading }) => ({
      post: sample.post,
      users: sample.users,
      loadingPost: loading.GET_POST,
      loadingUsers: loading.GET_USERS,
    })
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers(1));
  }, [dispatch]);
  return (
    <div>
      <Sample
        post={post}
        users={users}
        loadingPost={loadingPost}
        loadngUsers={loadingUsers}
      />
    </div>
  );
}
