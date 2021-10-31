import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState } from "react";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
	const [contacts, setContacts] = useState([]);
	const [appointments, setAppointments] = useState([]);


  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
	const updateContact = (updateName, updatePhoneNumber, updateEmail) => {
    setContacts((contacts => {
      return ([{name: updateName, phone: updatePhoneNumber, email: updateEmail}, ...contacts])
    }))
	}
	
	const addAppointment = (updateTitle, updateContact, updateDate, updateTime) => {
    setAppointments(appointments => {
      return ([{title:updateTitle,contact: updateContact, date: updateDate, time: updateTime}, ...appointments])
    })
	}

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
					  <ContactsPage
						  
					contacts={contacts}
					updateContact={updateContact}
				/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
					<AppointmentsPage
						appointments={appointments}
						addAppointment={addAppointment}
            contacts={contacts}
			/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
