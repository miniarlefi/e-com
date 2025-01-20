const app = require('./app')//imports the Express application instance from the ./app module
const port = process.env.PORT || 5000//This line sets the port on which the server will listen for incoming requests.
app.listen(port, () => {//Starts the server and listens for connections on the specified port
    console.log(`Server running on port ${port}`)
})