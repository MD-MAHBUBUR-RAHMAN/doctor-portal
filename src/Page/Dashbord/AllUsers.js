import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(
    "allusers",
    fetch("http://localhost:5000/user").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-3xl text-center">All Users {users?.length}</h3>
    </div>
  );
};

export default AllUsers;
