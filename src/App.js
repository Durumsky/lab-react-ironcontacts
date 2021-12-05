import React, { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0, 5));

  const random = () => {
    const randomContact = contactsArr[Math.floor(Math.random() * contactsArr.length - 1)];
    let inList = contacts.find((contact) => randomContact.id === contact.id);
    
    if (!inList) {
      setContacts((contacts) => [randomContact, ...contacts]);
    } else random();

  };

  const sortName = () => {
   const sortedByName = contacts.sort((a , b) => {
     return a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
   })
   setContacts((contacts) => [...sortedByName])
  };

  const sortPopularity = () => {
    const sortedByPopularity = contacts.sort((a , b) => {
      return b.popularity - a.popularity
    })
    setContacts((contacts) => [...sortedByPopularity])
   };



  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={random}>Add Random Contact</button>
      <button onClick={sortName}>Sort by name</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          {contacts.map((contact) => {
            return (
              <tbody>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt="contact"
                    style={{ height: 100 }}
                  />
                  {contact.firstName}
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {contact.wonOscar && <td>🏆</td>}
                {contact.wonEmmy && <td>🏆</td>}
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
