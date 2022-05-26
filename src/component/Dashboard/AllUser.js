import React from "react";
import { useQuery } from "react-query";

const AllUser = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <div className="flex items-center justify-center ">
          <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  const handleMakeAdmin = (user) => {
      console.log(user);
    const { email } = user;
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  };

  return (
    <div>
      <h4 className="text-primary text-3xl">All User {users.length}</h4>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <th>{(index += 1)}</th>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-xs"
                      onClick={() => handleMakeAdmin(user)}
                    >
                      Make admin
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-xs">Remove User</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
