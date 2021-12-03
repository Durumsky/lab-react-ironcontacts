import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const fiveContacts = contacts.slice(0, 5);
  console.log(fiveContacts);

  return (
    <div className="App">
      <h1>IronContacts</h1>
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
          {fiveContacts.map((contact) => {
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
