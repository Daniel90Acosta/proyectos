const app = require('./app')
const http = require('http')
const server = http.createServer(app);

server.listen(3300, ()=>{
    console.log('el servidor esta corriendo');
})