import React from "react";
import { useState, useEffect } from "react";
import { TileList } from "../../components/tileList/TileList";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = (props) => {
/*
  Define state variables for 
  contact info and duplicate check
*/
	const [currentName, setCurrentName] = useState("");
	const [currentEmail, setCurrentEmail] = useState("");
	const [currentPhone, setCurrentPhone] = useState("");
	const [isDuplicate, setIsDuplicate] = useState(false);

	useEffect(() => {
	
		setIsDuplicate(props.contacts.some(contact => {
			if (contact.name === currentName || contact.email === currentEmail || contact.phone === currentPhone) {
				return true;
			} else { return false }
		}
		));
	},[currentEmail, currentName, currentPhone, props.contacts]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isDuplicate) {
			props.updateContact(currentName, currentPhone, currentEmail);
			setCurrentEmail("");
			setCurrentName("");
			setCurrentPhone("");
		}
	  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
	useEffect(() => {
		
		return (()=>{})
	}, [])

  return (
    <div>
      <section>
			  <h2>Add Contact</h2>
			  <ContactForm
				  handleSubmit={handleSubmit}
				  name={currentName}
				  phone={currentPhone}
				  email={currentEmail}
				  setName={setCurrentName}
				  setPhone={setCurrentPhone}
				  setEmail={setCurrentEmail}
			  />
      </section>
      <hr />
      <section>
			  <h2>Contacts</h2>
			  <TileList
				  itemsList={props.contacts}
			  />
      </section>
    </div>
  );
};
