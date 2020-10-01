import React, { useState } from "react";
const BAND_MEMBERS
  = [
    {
      id: 1,
      name: 'Neil Peart',
      instrument: 'Batery'
    },
    {
      id: 2,
      name: 'Alex Lifesoon',
      instrument: 'Guitar'
    },
    {
      id: 3,
      name: 'Geddy Lee',
      instrument: 'Batery'
    },
  ]

export default function Band() {
  const [bandMembers] = useState(BAND_MEMBERS)
  const [bandName] = useState('Rush');

   return (
    <div align="center">
      <h4>{bandName}</h4>
      <ul>
        {bandMembers.map(({ id, name, instrument }) => {
          return (
            <li key={id}>
              {id}) {name} - {instrument}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
