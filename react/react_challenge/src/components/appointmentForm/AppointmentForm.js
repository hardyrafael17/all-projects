import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      
      <label htmlFor="title">Title
        <input required
          type="text"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </label>

      <label htmlFor="date">Date
        <input required
          min={getTodayString()}
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </label >

      <label htmlFor="time" >Time
        <input required
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </label >

      <ContactPicker
        contacts={contacts}
        contact={contact}
        setContact={setContact}
      />
      <input type="submit" value="Add Appointment" />
    </form >
  );
};
