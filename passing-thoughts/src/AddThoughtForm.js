import { useState } from 'react';
import React from 'react';
import { generateId, getNewExpirationTime } from './utilities';

function AddThoughtForm (props) {
  const [ text, setText ] = useState("");
  const handleTextChange = (event) => {
    setText(event.target.value)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const thoughtObject = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
	}
	  if (thoughtObject.text.length > 0) {
		  props.addThought(thoughtObject);
	  }
  }
  return (
    <form
      className="AddThoughtForm"
      onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddThoughtForm;
