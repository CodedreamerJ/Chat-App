import React, { useState, useEffect } from 'react';
import queryString from 'query-string'; //Help us with retriving data from the URL
import io from 'socket.io-client';

import './Chat.css';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';



let socket;

//useEffect hook is used for the basic setup of users joining and disconnecting

const Chat = ({ location }) => {
    const [name, setName] = useState(''); 
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';
   
    useEffect(() => {
        const { name, room } = queryString.parse(location.search); //Location comes from React Router providing us with a Prop = location. Using this we essentially get a URL back

        socket = io(ENDPOINT, { transports : ['websocket'] });

        setName(name);
        setRoom(room);
        
       
        socket.emit('join', { name, room }, () => {
          
        });
        //Return function used to disconnect from the useEffect hook. 
        return () => {
          socket.emit('disconnect');

          socket.off();
        }
      }, [ENDPOINT, location.search]);

      useEffect(() => {
        socket.on('message', (message) => {
          setMessages([...messages, message ]);
        })
      }, [messages]);

      // function for sending messages
      const sendMessage = (event) => {
        event.preventDefault();//This method prevents the browser from refresing which avoids other issues
       
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
      }

      console.log(message, messages);

      return ( 
        <div className="outerContainer">
          <div className="container">
            <InfoBar room={room} />
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </div>
        </div>
      )
}

export default Chat;