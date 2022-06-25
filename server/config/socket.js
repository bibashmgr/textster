module.exports = (io) => {
  let users = [];
  io.on('connection', (socket) => {
    const addUser = (userId, socketId) => {
      !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
    };

    const removeUser = (socketId) => {
      users = users.filter((user) => user.socketId !== socketId);
    };

    const getUser = (userId) => {
      return users.find((user) => user.userId === userId);
    };

    socket.on('getUserId', (userId) => {
      addUser(userId, socket.id);
      io.emit('getUsers', users);
    });

    socket.on('sendMessage', (data) => {
      const user = getUser(data.receiverId);
      io.to(user?.socketId).emit('getMessage', {
        senderId: data.senderId,
        text: data.text,
      });
    });

    socket.on('disconnect', () => {
      removeUser(socket.id);
      io.emit('getUsers', users);
    });
  });
};
