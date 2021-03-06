import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./images";

function App() {
  return (
    <div>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C5103AQHetjVJqp5K1g/profile-displayphoto-shrink_200_200/0/1582636476209?e=1619049600&v=beta&t=R5I-KDOS_lfPJc0sMd-nVbOULWTTb8tdI9bXl6dxftA" />
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
