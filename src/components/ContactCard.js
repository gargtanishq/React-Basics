import React from "react";
import user from "../images/userPhoto.jpg";
import "./ContactCard.css";

const ContactCard = (props) => {
  const { id, Fname, Lname } = props.contact;

  return (
    <div className="item">
      <div className="content">
        <img className="avatar image" src={user} alt="user" />
        <div className="header">{Fname}</div>
        <div className="header">{Lname}</div>
      </div>
      <i
        class='bx bxs-trash'
        style={{ color: "red"}}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
