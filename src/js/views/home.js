import React, {useContext } from "react";
import { Context } from "../store/appContext";
import contactsImage from "../../img/contacts.png";
import "../../styles/home.css";
import { useNavigate} from "react-router";


export const Home = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    return (
        <div className="text-center auto">
            <div className="TitleContacts">
            <h1>{store.agendaSlug} Contact list</h1>
            &nbsp; 
            </div>


            {
                store.currentAgenda && store.currentAgenda.length > 0 && store.currentAgenda.map((item, index) => (
                    <div className="card mb-3 rounded-lg" id="contactsMainLook" key={index}>
                        <div className="row g-0">
                            <div className="col-md-2" style={{width: "13rem"}}>
                                <img src={contactsImage} className="img-fluid" alt="Profile" style={{ maxWidth: "110px", maxHeight: "100px", marginTop: "50px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title">{item.full_name}</h5>
                                    <ul className="extrainfo">
                                        <p><i className="fa-solid fa-phone" id="smallicons"></i>{item.phone} </p>
                                        <p><i className="fa-solid fa-location-dot" id="smallicons"></i>{item.address}</p>
                                        <p><i className="fa-solid fa-envelope-open-text" id="smallicons"></i>{item.email}</p>
                                    </ul>
                                 </div> 
                                
                            </div>
                            <div className="col">
                                    <i className="fa-solid fa-user-pen" style={{color: "1f3151"}} 
                                    onClick={() => 
                                        navigate(`/edit/${item.id}`)}></i>
                                    <i className="fa-solid fa-trash-can" style={{color: "1f3151"}} 
                                    onClick={() => 
                                        actions.deleteContact(item.id)}></i>
                                </div>
                        </div>
                    </div>
                ))

           }
        </div>
    )
};

