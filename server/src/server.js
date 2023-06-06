const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const server = http.createServer(app);

const { loadPlanets } = require('./models/planets/planets.model');

mongoose.connection.once('open', () =>{
    console.log('Connect to MongoDB successfully!');
})

mongoose.connection.on('error', (err) =>{
    console.error(err);
})

const MONGO_URL = 'mongodb+srv://arjeloujelou:paT6Xl50dVkemDps@cluster0.rogniex.mongodb.net/test?retryWrites=true&w=majority';

const PORT = process.env.PORT || 8000;

async function startSever(){
    await mongoose.connect(MONGO_URL);
    await loadPlanets();
    
    server.listen(PORT, () => {
        console.log(`Listening on ports ${PORT}....`);
    });
}

startSever();

