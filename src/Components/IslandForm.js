import { useState } from 'react';

export default function IslandForm({ island, incVisitors }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
        placeholder="Type Full Name"
      />
      <input
        onChange={(event) => {
          setPhone(event.target.value);
        }}
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        placeholder="Type Phone Number"
      />
      <button
        className="book"
        onClick={() => {
          window.confirm(
            `Are you sure you want to book to ${island.name} with the Name: ${name}, Phone: ${phone}`
          );
          {
            incVisitors(island.id);
          }
        }}
      >
        Book for today!
      </button>
    </div>
  );
}
