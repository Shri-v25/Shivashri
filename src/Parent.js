import React from "react";
import UserCard from "./Child";
import "./Card.css";

function UserList() {
  const users = [
    { name: "Shivashri", email: "sgshivashri@example.com", age: 19 },
    { name: "Meera", email: "meerad@example.com", age: 25 },
    { name: "Charlie", email: "charlieq@example.com", age: 23 }
  ];

  return (
    <div className="user-list">
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          email={user.email}
          age={user.age}
        />
      ))}
    </div>
  );
}

export default UserList;