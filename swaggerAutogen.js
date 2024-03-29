const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/*.js']; // Path to your API route files

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./swagger'); // Requiring swagger.js to set up Swagger UI
});
