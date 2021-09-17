import React, { useState, useEffect } from 'react';
import  { uuid } from 'uuidv4'
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import Header1 from './header1'; //Include Heder
import Footer from './footer'; //Include Footer
function App() {
  const Local_storgae_key = "contacts"
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    console.log('hhhhhhhhhhhhhhh', contact)
    setContacts([...contacts,{id:uuid(),...contact} ])
  }
  useEffect(() => {
   const retrivecontacts = JSON.parse( localStorage.getItem(Local_storgae_key))
  if(retrivecontacts) setContacts(retrivecontacts)
  }, [])
  useEffect(() => {
    localStorage.setItem(Local_storgae_key, JSON.stringify(contacts))
  }, [contacts])
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>

  );
}

export default App;
