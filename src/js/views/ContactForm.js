import React, { useState, useEffect, useContext } from "react";
import "../../styles/contactForm.css";
import { Link, useNavigate, useParams } from "react-router-dom";


import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ContactForm = () => {
	const {store, actions} = useContext(Context);
	const params = useParams();

  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone]= useState("");
  const [address,setAddress] = useState("");

  const navigate = useNavigate();
  
  const createContact = () => {
    actions.addContact(
      {
        "full_name": fullName,
        "email": email,
        "agenda_slug": store.agendaSlug,
        "address": address,
        "phone": phone,
      })
      navigate("/")
  }
  const updateContact = () => {
    actions.updateContact( params.id,
      {
        "full_name": fullName,
        "email": email,
        "agenda_slug": store.agendaSlug,
        "address": address,
        "phone": phone,
      })
      navigate("/")
  }

  useEffect(() => {
	if (params.id) {
		const currentContact = store.currentAgenda?.find(item => item.id == params.id)
		if (currentContact) {
			setFullName(currentContact.full_name)
			setEmail(currentContact.email)
			setPhone(currentContact.phone)
			setAddress(currentContact.address)
		}
	}
}, [])

	return (
		<div className="container" id="entireForm">
			<h5 className="title">{params.id ? "Update Contact" : "Add a new contact"}</h5>
				
						<form noValidate className="formulario-align-items-center">
							<div className="mb-3">
								<label htmlFor="basic-url" className="form-label">Full name</label>
								<div className="input-group">
									<input type="text" value={fullName} 
									onChange={(e) => setFullName(e.target.value)}
									aria-label="Full name" placeholder="Full name" className="form-control" id="inputForm" />
								</div>
							</div>

							<div className="mb-3">
								<label htmlFor="basic-url" className="form-label">Email address</label>
								<div className="input-group">
									<input type="text" className="form-control" value={email}
									onChange={(e) => setEmail(e.target.value)} 
									id="inputForm" placeholder="Enter email" aria-describedby="basic-addon3 basic-addon4"/>
								</div>
							</div>

							<div className="mb-3">
								<label htmlFor="basic-url" className="form-label">Phone number</label>
								<div className="input-group">
									<input type="text" className="form-control" value={phone}
									onChange={(e) => setPhone(e.target.value)}
									id="inputForm" placeholder="Enter phone number" aria-describedby="basic-addon3 basic-addon4"/>
								</div>
							</div>

							<div className="mb-3">
								<label htmlFor="basic-url" className="form-label">Address</label>
								<div className="input-group">
									<input type="text" className="form-control" value={address}
									onChange={(e) => setAddress(e.target.value)} id="inputForm" placeholder="Enter address" aria-describedby="basic-addon3 basic-addon4"/>
								</div>
							</div>
						
						</form>
					
			<br />
			<div className="d-grid gap-2">
				<button className="btn btn-primary" type="button" onClick={() => params.id ? updateContact() : createContact()}>Save</button>
			</div>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>		
			</Link>
		</div>
	);
};
