import React from "react";
import { ContactListStyled } from "./ContactListStyled";

const ContactList = ({ id, name, number, removeContact }) => {
  const deleteContact = () => {
    removeContact(id);
  };
  return (
    <ContactListStyled>
      {name}: {number}
      <button className="contactBtn" type="button" onClick={deleteContact}>
        Delete
      </button>
    </ContactListStyled>
  );
};

export default ContactList;
