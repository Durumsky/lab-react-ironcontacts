import React, { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0, 5));

  const random = () => {
    
    
    const randomContact =
            contactsArr[Math.floor(Math.random() * contactsArr.length - 1)];

    const randomId = randomContact.id

    let inList = false;

    for (let contact of contacts){
      if (randomId === contact.id){
        inList = true
      }
    }
    if (!inList){
      setContacts((contacts) => [randomContact, ...contacts]);
    }
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={random}>Add Random Contact</button>
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
