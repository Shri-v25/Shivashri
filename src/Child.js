
import React from "react";
import "./Card.css"; // Import the CSS file

function UserCard(props) {
  return (
    <div className="user-card">
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Age:</strong> {props.age}</p>
    </div>
  );
}

export default UserCard;