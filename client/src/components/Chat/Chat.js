import React, { useState, useEffect } from 'react';
import queryString from 'query-string'; //Help us with retriving data from the URL
import io from 'socket.io-client';

import './Chat.css';

import TextContainer from '../TextContainer/TextContainer';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

//useEffect hook is used for the basic setup of users joining and disconnecting

const Chat = ({ location }) => {
    const [name, setName] = useState(''); 
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'https://realtime-chat-app-2022.herokuapp.com/';
   
    useEffect(() => {
        const { name, room } = queryString.parse(location.search); //Location comes from React Router providing us with a Prop = location. Using this we essentially get a URL back

        socket = io(ENDPOINT, { transports : ['websocket'] });

        setName(name);
        setRoom(room);
        
       
        socket.emit('join', { name, room }, (error) => {
          if(error) {
            alert(error);
          }
        });
      }, [ENDPOINT, location.search]);

      useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        });
      

      // function for sending messages
      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
  }, []);
  
    const sendMessage = (event) => {
      event.preventDefault();
  
      if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));
      }
    }

      return ( 
        <div className="outerContainer">
          <div className="container">
            <InfoBar room={room} />
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </div>
          <TextContainer users={users}/>
        </div>
      )
}

export default Chat;