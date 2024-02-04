import React, {useState, useEffect} from "react";
import "../../styles/home.css";

export const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [contact, setContact] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue("");
        setContact([...contact, {label: inputValue, done: false}]);
            updateContact([...contact, {label: inputValue, done: false}]);
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
    function updateContact(updatedContact){
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
    
    return (
    <div className="text-center auto">
        <ul>

        <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-3">
                      <p className="rounded float-start"> Picture </p>
                </div>
                <div className="col-md-5">
                    <h5 className="card-title">Card title</h5>
                <ul className="extrainfo">
                    <i class="fa-solid fa-phone"></i><div> Extra info </div>
                    <i class="fa-solid fa-location-dot"></i><div> Extra info </div>
                    <i class="fa-solid fa-envelope-open-text"></i><div> Extra info </div>
                </ul>
                </div>	
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

        
        </ul>
    </div>
	)
};
