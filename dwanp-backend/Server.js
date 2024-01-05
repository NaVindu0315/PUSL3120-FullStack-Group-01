//port
const port = 3001;
const host = "localhost";
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const emprouter = require("./routes/employee_router");

//to import routers

// adala cmnt ekat ytin line eke router path dapan adala thana
//menu
const menrouter = require('./routes/menu_router');

//inventory
const invrouter = require("./routes/inventory_router");

//order
const orderrouter = require('./routes/order_router');
//employee

//table
const tablerouter = require('./routes/table_router');

//authentication  
//importing auth router
const auth_user_router = require('./routes/auth_user_router')
//for custoomers
const customerRouter = require("./routes/customer_router");

app.use(cors());
app.use(express.json());
//username for the db navindu0315
//password dwanp5

//creating the db connection string
//meka chnge krnna epa
const uri =
  "mongodb+srv://navindu0315:dwanp5@dwanp.2xoqrcy.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("mongodb error ", error);
  }
};


///for the sockets 
//begin 

const http = require('http');
const {Server} = require("socket.io");
const server = http.createServer(app);

const io = new Server(server,
    
  {
      cors: {
          origin: "http://localhost:3000",
          methods: ["GET", "POST"]
      }
  }
  
  );
     ///io

     io.on('connection', (socket) => {
    //   console.log(socket.id);
      // console.log('user connected',socket.id);


       socket.on("join_room",(data) => {
           socket.join(data);
           //console.log("User joined room: "+data + " with id: "+socket.id);
       } );

       //For sending message
       socket.on("send_message", (data) => {
           //socket.to(data.room).emit("receive_message",data);
           //console.log(data);
           socket.to(data.room).emit("receive_message",data);
       } );


       socket.on("disconnect", () => {
           console.log("User disconnected",socket.id);
       } );
   } );

//end

connect();

//before below line was this  ---> const server = app.listen(port, host, () => {
/*
const server = app.listen(port, host, () => {
  console.log("Node server is listenging to ", server.address().port);
});
*/
server.listen(3001, () => {
  console.log('running on port 3001');
}   );




//wish
app.use('/api',orderrouter);
app.use("/api", emprouter);
app.use("/api", invrouter);
app.use('/api',menrouter);
app.use('/api', tablerouter);

//for the authentication here um gonna use  my own but in the tutorial it says ('./api/user',auth_user_router)
app.use('/api/user',auth_user_router);

