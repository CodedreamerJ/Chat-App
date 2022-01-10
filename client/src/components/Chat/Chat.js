import React, { useState, useEffect } from 'react';
import queryString from 'query-string'; //Help us with retriving data from the URL
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState(''); 
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';
    useEffect(() => {
        const { name, room } = queryString.parse(location.search); //Location comes from React Router providing us with a Prop = location. Using this we essentially get a URL back

        socket = io(ENDPOINT, { transports : ['websocket'] });

        setName(name);
        setRoom(room);

        console.log(socket);
      });

      return ( 
        <h1>Chat</h1>
      )
}

export default Chat;