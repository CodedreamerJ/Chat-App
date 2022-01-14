const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUserInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {  
    const { error, user } = addUser({ id: socket.id, name, room }); 
    
    if(error) return callback(error);
    //This socket is welcoming the user to the chat while broadcast is letting every other user that he/she has entered the chat
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}.` });
    //socket.broadcast sends a message to everyone besides that particular user
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!`});
    
    socket.join(user.room);

    callback();
  });
  //Events for user generated messaqes
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message});

    callback();
  });

  socket.on('disconnect', () => {
    console.log('User has left!!!');
    })
  });

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));