import React from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import SideNavbar from "./SideNavbar";

const Wrapper = () =>{
    return (
        <div className="wrapper">
            <SideNavbar/>
            <div className="mainContainer">
                <ContactList/>
                <AddContact/>
            </div>
        </div>
    );
};

export default Wrapper;