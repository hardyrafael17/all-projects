import React from "react";

export const ContactPicker = (props) => {
  return (
    <label>Please Select a contact
      <select required onChange={e => {
        props.setContact(e.target.value)
      }
      }>
    <option defaultValue disabled>Please Select an contact</option>
      {
        props.contacts.map((contact, index) => {
          return (
            <option
              key={index}
              value={contact.name}>{contact.name}
            </option>
          )
        }
        )
      }
      </select>
      </label>
  );
};
