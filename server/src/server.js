const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const loadPlanets = require('./models/planets/planets.model');

const PORT = process.env.PORT || 8000;

async function startSever(){
    await loadPlanets();
    
    server.listen(PORT, () => {
        console.log(`Listening on ports ${PORT}....`);
    });
}

