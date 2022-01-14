/* 
Create helper functions that are gonna help us manange user 
and manage users joinin in/signing out and removing users, adding users and
 what users are in what room
 */

 const users = [];

 const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);

    if(existingUser) {
        return { error: 'Username is taken'};
    }

    const user = { id, name, room };

    users.push(user);

    return { user }
 }

 const removeUser = (id) => {
     const index = users.findIndex((user) => user.id === id);

     if(index !== -1) {
         return users.splice(index, 1)[0];
     }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUserInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUserInRoom };