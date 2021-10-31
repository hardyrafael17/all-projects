import React from "react";

export const ContactForm = ({
	name,
	setName,
	phone,
	setPhone,
	email,
	setEmail,
	handleSubmit
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name
				<input
					type="text"
					onChange={(event) => { setName(event.target.value) }}
					value={name}
					id="name"
				/>
			</label>
			<br />
			<label htmlFor="phone" > Phone
				< input
					type="tel "
					onChange={(event) => { setPhone(event.target.value) }}
					placeholder="###-###-####"
					value={phone}
				/>
			</label >
			<br />
			<label htmlFor="email" > Email
				< input
					value={email}
					onChange={event => setEmail(event.target.value)}
					type="email"
					placeholder="@"
				/>
			</label >
			<input type="submit" value="Add Contact" />

		</form >
	);
};
