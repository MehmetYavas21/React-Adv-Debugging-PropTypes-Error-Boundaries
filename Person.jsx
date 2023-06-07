import React from "react";

function Person({ name, age, address, hobbies, pronoun }) {
  const formattedAddress = `${address.houseNumber} ${address.street}, ${address.city}`;
  return (
    <div className="person">
      <p>
        {name} (aged {age}) lives at {formattedAddress}. {pronoun} likes to{" "}
        {hobbies.join(", ")}. What a person!
      </p>
    </div>
  );
}

export default Person;
