import React from "react";
import { useState } from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm"
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {

  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContact, setCurrentContact] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [timeEnteredInForm, setTimeEnteredInForm] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAppointment(currentTitle, currentContact, currentDate,timeEnteredInForm);

    setCurrentTitle("");
    setCurrentContact("");
    setTimeEnteredInForm("");
    setCurrentDate("");
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={props.contacts}
          title={currentTitle}
          setTitle={setCurrentTitle}
          contact={currentContact}
          setContact={setCurrentContact}
          date={currentDate}
          setDate={setCurrentDate}
          time={timeEnteredInForm}
          setTime={setTimeEnteredInForm}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          itemsList={props.appointments}
        />
      </section>
    </div>
  );
};
