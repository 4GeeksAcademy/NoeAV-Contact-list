import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const {actions} = useContext(Context);

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone]= useState("");
  const [address,setAddress] = useState("");

  const navigate = useNavigate();


  const createContact = () => {
   
    actions.addContact(
      {
        "full_name": `${firstName} ${lastName}`,
        "email": email,
        "agenda_slug": "karen_contacts",
        "address": address,
        "phone": phone,
      })
 
      navigate("/")

  }

	return (
		<div className="container" id="entireForm">
			<h5 className="title"> Add a new contact</h5>
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (

						<form onSubmit={handleSubmit} noValidate className="formulario-align-items-center">
							<div className="mb-3">
								<label for="basic-url" className="form-label">Full name</label>
								<div className="input-group">
									<input type="text" aria-label="First name" placeholder="First name" className="form-control"/>
 									<input type="text" aria-label="Last name" placeholder="Last name" className="form-control"/>
								</div>
							</div>

							<div className="mb-3">
								<label for="basic-url" className="form-label">Email address</label>
								<div className="input-group">
									<input type="text" className="form-control" id="emailadressinput" placeholder="Enter email" aria-describedby="basic-addon3 basic-addon4"/>
								</div>
							</div>

							<div className="mb-3">
								<label for="basic-url" className="form-label">Phone number</label>
								<div className="input-group">
									<input type="text" className="form-control" id="phonenumberinput" placeholder="Enter phone number" aria-describedby="basic-addon3 basic-addon4"/>
								</div>
							</div>

							<div className="mb-3">
								<label for="basic-url" className="form-label">Address</label>
								<div className="input-group">
									<input type="text" className="form-control" id="addressinput" placeholder="Enter address" aria-describedby="basic-addon3 basic-addon4"/>
								</div>
							</div>
						
						</form>
					);
				})}
			</ul>
			<br />
			<div className="d-grid gap-2">
				<button className="btn btn-primary" type="button" onClick={addContact}>Save</button>
			</div>
			<br />
			<Link to="/">
				<p><a className="link-opacity-25-hover">Back home</a></p>			
			</Link>
		</div>
	);
};
