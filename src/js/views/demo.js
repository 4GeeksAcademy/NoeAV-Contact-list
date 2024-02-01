import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h5 className="title"> Add a new contact</h5>
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						// <li
						// 	key={index}
						// 	className="list-group-item d-flex justify-content-between"
						// 	style={{ background: item.background }}>
						// 	<Link to={"/single/" + index}>
						// 		<span>Link to: {item.title}</span>
						// 	</Link>
						// 	{// Conditional render example
						// 	// Check to see if the background is orange, if so, display the message
						// 	item.background === "orange" ? (
						// 		<p style={{ color: item.initial }}>
						// 			Check store/flux.js scroll to the actions to see the code
						// 		</p>
						// 	) : null}
						// 	<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
						// 		Change Color
						// 	</button>
						// </li>

						<div>
							<div class="mb-3">
								<label for="basic-url" class="form-label">Full name</label>
								<div class="input-group">
									<input type="text" aria-label="First name" placeholder="First name" class="form-control"/>
 									<input type="text" aria-label="Last name" placeholder="Last name" class="form-control"/>
								</div>
							</div>

							<div class="mb-3">
								<label for="basic-url" class="form-label">Email address</label>
								<div class="input-group">
									<input type="text" class="form-control" id="emailadressinput" placeholder="Enter email" aria-describedby="basic-addon3 basic-addon4"/>
								</div>
							</div>

							<div class="mb-3">
								<label for="basic-url" class="form-label">Phone number</label>
								<div class="input-group">
									<input type="text" class="form-control" id="phonenumberinput" placeholder="Enter phone number" aria-describedby="basic-addon3 basic-addon4"/>
								</div>
							</div>

							<div class="mb-3">
								<label for="basic-url" class="form-label">Address</label>
								<div class="input-group">
									<input type="text" class="form-control" id="addressinput" placeholder="Enter address" aria-describedby="basic-addon3 basic-addon4"/>
								</div>
							</div>
						
						</div>
					);
				})}
			</ul>
			<br />
			<div class="d-grid gap-2">
				<button className="btn btn-primary" type="button">Save</button>
			</div>
			<br />
			<Link to="/">
				<p><a class="link-opacity-25-hover">Back home</a></p>			
				</Link>
		</div>
	);
};
