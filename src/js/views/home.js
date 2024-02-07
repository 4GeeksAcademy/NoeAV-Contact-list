import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import contactsImage from "../../img/contacts.png";
import "../../styles/home.css";
import { useActionData } from "react-router";


export const Home = () => {
    const [inputValue, setInputValue] = useState("")
    const [contact, setContact] = useState(0);
    const [agendaName, setAgendaName] = useState("");
    const { store, actions } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue("");
        setContact([...contact, { label: inputValue, done: false }]);
        updateContact([...contact, { label: inputValue, done: false }]);
    }

    // 1. getList - para traer la lista de contactos actual
    // 2. updateContact - para añadir contacto a la base y editar la información del contacto
    // 3. deleteContact - para borrar contacto ya creado.

    function getList() {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setContact(data))
    };

    // 2. addContact - para añadir contacto a la base
    function updateContact(updatedContact) {
        fetch("", {
            method: "PUT",
            body: JSON.stringify(updatedContact),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => {
                return resp.json();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // 3. deleteContact - para que pueda editar la información del contacto

    const deleteContact = (label) => {
        const updatedContact = contact.filter((item) => item.label !== label);
        updateContact(updatedContact);
        setContact(updatedContact);
    }

    useEffect(() => {
        actions.getAgenda(agendaName)
    }, [agendaName])


    return (
        <div className="text-center auto">
            <label>Who's contact list?</label> &nbsp;
            <input onChange={(e) => setAgendaName(e.target.value)}></input>
            &nbsp; 
            <h1>{agendaName} Contact list</h1>
            &nbsp; 




            {
                store.currentAgenda.map((item, index) => (
                    <div className="card mb-3" id="contactsMainLook" key={index}>
                        <div className="row g-0">
                            <div className="col-md-2" style={{width: "13rem"}}>
                                <img src={contactsImage} className="img-fluid" alt="Profile" style={{ maxWidth: "110px", maxHeight: "100px"}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body d-flex flex-column justify-content-between">

                                    <h5 className="card-title">{item.full_name} noelia CM</h5>
                                    <ul className="extrainfo">
                                        <p><i className="fa-solid fa-phone"></i>{item.phone} phone </p>
                                        <p><i className="fa-solid fa-location-dot"></i>{item.address} address </p>
                                        <p><i className="fa-solid fa-envelope-open-text"></i>{item.email} email </p>
                                    </ul>
                                 </div> 
                                    <div>
                                    
                                    <i className="fa-solid fa-user-pen" style={{color: "1f3151"}} 
                                    onClick={() => 
                                        editContact (index)}></i>
                                    <i className="fa-solid fa-trash-can" style={{color: "1f3151"}} 
                                    onClick={() => 
                                        deleteContact (index)}></i>
                                    </div>
                            </div>
                        </div>
                    </div>
                ))

            /* <ul>

         
                <div className="col">
                    <i className="fa-solid fa-user-pen" style={{color: "1f3151"}} 
                    onClick={() => 
                        editContact (index)}></i>
                    <i className="fa-solid fa-trash-can" style={{color: "1f3151"}} 
                    onClick={() => 
                        deleteContact (index)}></i>
                </div>	
            </div>
            </div>

        
        </ul> */}
        </div>
    )
};

