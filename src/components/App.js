import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import SideNavbar from "./SideNavbar";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Wrapper from "./Wrapper";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // gets the data and send it to AddContact.js
  const AddContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  // create copy and then filter out the list
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // to store the data even after refresh
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="Wraper">
      <Header />
      <div className="article">
        <SideNavbar />
        <div className="mainContent">
          <ContactList
            contacts={contacts}
            getContactId={removeContactHandler}
          />
          <AddContact AddContactHandler={AddContactHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
