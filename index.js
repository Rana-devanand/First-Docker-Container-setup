const express = require("express");

const app = express();


const createAndStartServer = () =>{
     const server = app.listen(3000, () => {
         console.log("Server started on port 3000");
     });

     return server;
}
createAndStartServer();