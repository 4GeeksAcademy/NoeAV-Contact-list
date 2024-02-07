import React, { useState, useEffect, useContext } from "react";
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
        "full_name": `${fullName}`,
        "email": email,
        "agenda_slug": "NoeAV1314",
        "address": address,
        "phone": phone,
      })
      navigate("/")
  }

  useEffect(() => {
	if (params.id) {
		const currentContact = store.currentAgenda?.find(item => item.id == params.id)
		if (currentContact) {
			set
		}
	}
}, [agendaName])

	return (
		<div className="container" id="entireForm">
			<h5 className="title"> Add a new contact</h5>
				
						<form onSubmit={handleSubmit} noValidate className="formulario-align-items-center">
							<div className="mb-3">
								<label for="basic-url" className="form-label">Full name</label>
								<div className="input-group">
									<input type="text" value={fullName} 
									onChange={(e) => setFullName(e.target.value)}
									aria-label="Full name" placeholder="Full name" className="form-control"/>
								</div>
							</div>

							<div className="mb-3">
								<label for="basic-url" className="form-label">Email address</label>
								<div className="input-group">
									<input type="text" className="form-control" value={email}
									onChange={(e) => setEmail(e.target.value)} 
									id="emailadressinput" placeholder="Enter email" aria-describedby="basic-addon3 basic-addon4"/>
								</div>
							</div>

							<div className="mb-3">
								<label for="basic-url" className="form-label">Phone number</label>
								<div className="input-group">
									<input type="text" className="form-control" value={phone}
									onChange={(e) => setPhone(e.target.value)}
									id="phonenumberinput" placeholder="Enter phone number" aria-describedby="basic-addon3 basic-addon4"/>
								</div>
							</div>

							<div className="mb-3">
								<label for="basic-url" className="form-label">Address</label>
								<div className="input-group">
									<input type="text" className="form-control" value={address}
									onChange={(e) => setAddress(e.target.value)} id="addressinput" placeholder="Enter address" aria-describedby="basic-addon3 basic-addon4"/>
								</div>
							</div>
						
						</form>
					
			<br />
			<div className="d-grid gap-2">
				<button className="btn btn-primary" type="button" onClick={createContact}>Save</button>
			</div>
			<br />
			<Link to="/">
				<p><a className="link-opacity-25-hover">Back home</a></p>			
			</Link>
		</div>
	);
};
