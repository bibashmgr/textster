module.exports = (io) => {
  io.on('connection', (socket) => {
    const users = [];

    console.log(`${socket.id} connected : ${new Date().toLocaleTimeString()}`);

    socket.on('getUserId', (id) => {
      console.log(id);
    });

    socket.on('disconnect', () => {
      console.log(
        `${socket.id} disconnected : ${new Date().toLocaleTimeString()}`
      );
    });
  });
};
