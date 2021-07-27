import React from "react";
import ContactList from "./contactList/ContactList";

const Contacts = ({ contacts, filter, removeContact }) => {
  return (
    <>
      <ul>
        {contacts.map(
          (contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase()) && (
              <ContactList
                {...contact}
                key={contact.id}
                removeContact={removeContact}
              />
            )
        )}
      </ul>
    </>
  );
};

export default Contacts;
