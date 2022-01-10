import React, { useState } from 'react';
/* Hooks are a new addition in React 16.8. 
They let you use state and other React features
 without writing a class. */
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    //name and room is the current state while setName and setRoom is the function which updates it
    const [name, setName] = useState(''); //Data will be sent using the onChange event function "setName(event.target.value)" via line 15 in the code block
    const [room, setRoom] = useState(''); //Data will be sent using the onChange event function "setRoom(event.target.value)" via line 16 in the code block

    //Link component will allow us to read 
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) =>  setName(event.target.value)} /></div> 
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) =>  setRoom(event.target.value)} /></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                  <button className="button mt-20" type="submit">Sign In</button>  
                </Link>
            </div>
        </div>
    );
}

export default Join;