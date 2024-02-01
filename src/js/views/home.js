import React from "react";
import "../../styles/home.css";

export const Home = () => (
		<div className="text-center auto">
			<ul>

			<div className="card mb-3">
  				<div className="row g-0">
    				<div className="col-md-3">
      					<p className="rounded float-start"> Picture </p>
    				</div>
					<div className="col-md-5">
						<h5 className="card-title">Card title</h5>
					<ul>
						<div> Extra info </div>
						<div> Extra info </div>
						<div> Extra info </div>
					</ul>
					</div>	
					<div className="col">
						<i class="fa-solid fa-user-pen" style={{color: "#08a305"}}></i>
						<i className="fa-solid fa-trash-can" style={{color: "#08a305"}} 
						onClick={() => 
							eliminarTarea (index)	
						}></i>
					</div>	
				</div>
				</div>

				<div className="card mb-3">
  				<div className="row g-0">
    				<div className="col-md-3">
      					<p className="rounded float-start"> Picture two</p>
    				</div>
					<div className="col-md-5">
						<h5 className="card-title">Card title</h5>
					<ul>
						<div> Extra info </div>
						<div> Extra info </div>
						<div> Extra info </div>
					</ul>
					</div>	
					<div className="col">
						<i class="fa-solid fa-user-pen" style={{color: "#08a305"}}></i>
						<i className="fa-solid fa-trash-can" style={{color: "#08a305"}} 
						onClick={() => 
							eliminarTarea (index)	
						}></i>
					</div>	
				</div>
				</div>

				<div className="card mb-3">
  				<div className="row g-0">
    				<div className="col-md-3">
      					<p className="rounded float-start"> Picture three</p>
    				</div>
					<div className="col-md-5">
						<h5 className="card-title">Card title</h5>
					<ul>
						<div> Extra info </div>
						<div> Extra info </div>
						<div> Extra info </div>
					</ul>
					</div>	
					<div className="col">
						<i class="fa-solid fa-user-pen" style={{color: "#08a305"}}></i>
						<i className="fa-solid fa-trash-can" style={{color: "#08a305"}} 
						onClick={() => 
							eliminarTarea (index)	
						}></i>
					</div>	
				</div>
				</div>

				<div className="card mb-3">
  				<div className="row g-0">
    				<div className="col-md-3">
      					<p className="rounded float-start"> Picture four </p>
    				</div>
					<div className="col-md-5">
						<h5 className="card-title">Card title</h5>
					<ul>
						<div> Extra info </div>
						<div> Extra info </div>
						<div> Extra info </div>
					</ul>
					</div>	
					<div className="col">
						<i class="fa-solid fa-user-pen" style={{color: "#08a305"}}></i>
						<i className="fa-solid fa-trash-can" style={{color: "#08a305"}} 
						onClick={() => 
							eliminarTarea (index)	
						}></i>
					</div>	
				</div>
				</div>
			
			</ul>
		</div>
);
