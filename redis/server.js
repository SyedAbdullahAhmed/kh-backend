const express = require('express');
const { createServer } = require('http'); 
const { join } = require('path'); 
const { Server } = require('socket.io');
// const redis = require('redis');
const client = require('./client');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// socket connection
io.on('connection', (socket) => {
  console.log("connected");
  console.log('A user connected');

  // receive data from client
  socket.on('updateData', async (data) => {
    const cacheValue = await client.get('todos');

    if (cacheValue) {

      // Check if the data is not expired
      const ttl = await client.ttl('todos');

      if (ttl > 0) {
         
        // Data is not expired, update it with new data
        await client.set("todos", JSON.stringify(data));
        const newData = await client.expire("todos", 120);
        console.log(newData);
      } 
      else {
        console.log("Data has expired.");
      }

    } 
    else {
      // Cache is empty, set the initial data
      await client.set("todos", JSON.stringify(data));
      const initialData = await client.expire("todos", 120);
      console.log(JSON.stringify(initialData));
    }

    // Broadcast the updated data to all connected clients
    io.sockets.emit('broadcast', { message: data });
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

  server.listen(8000, () => {
    console.log('server running at port 8000...');
  });