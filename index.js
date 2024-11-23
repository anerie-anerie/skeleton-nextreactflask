// used rfce to create basic template
import React, { useEffect, useState } from 'react';

function Index() {

  //message state variable set to loading at first then once becomes data.message once retrieved
  const [message, setMessage] = useState("loading");
  //const [people, setPeople] = useState([]);

  // allow to create side effects (only doing it once)
  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/home")
    //gets responce from api into json and put into message data
    .then((response) => response.json())
    .then((data) => {
      //puts it in the console on the website (web dev mode)
        //console.log(data);

        //will display the string message in data
        setMessage(data.message);
        //setPeople(data.people);
        //console.log(data.people);
      });
  }, []);

  return (
    <div>{message}</div>
  )
}

export default Index