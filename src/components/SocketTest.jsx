/*
  Project Name: gdcraftjs
  License: MIT
  Created by: Lightnet
*/

//import logo from './logo.svg';
//import styles from './App.module.css';

function SocketTest() {

  //const wsc = new WebSocket('wss://localhost:3000');
  const wsc = new WebSocket('ws://localhost:3000');

  wsc.onmessage = (event) => {
    console.log(event)
    //document.getElementById('messages').innerHTML += 
    //  'Message from server: ' + event.data + "<br>";
  };

  wsc.addEventListener("open", () => {
    console.log("We are connected");
    wsc.send('hello')
  });

  return (
    <div>
      <p> SocketTest </p>
    </div>
  )
}

export default SocketTest;