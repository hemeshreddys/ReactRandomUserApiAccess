import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://randomuser.me/api/?results=100")
      .then(response =>
        response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`,
          email: `${user.email}`,
          gender: `${user.gender}`,
          image: `${user.picture.large}`,
          location: `${user.location.state}`
        }))
      )
      .then(data => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="container">
      {users.map(user => (
        <div
          key={user.username}
          className="users__user"
          style={{
            backgroundColor: `${user.gender === "male" ? "#458983" : "pink"}`
          }}
        >
          <img src={user.image} className="users__avatar" />
          <div className="users__meta">
            <h1>{user.name}</h1>
            <p>E: {user.email}</p>
            <p>G :{user.gender}</p>
            <p>L :{user.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
