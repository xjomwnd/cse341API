const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Social Media Aggregator API',
            version: '1.0.0',
            description: 'API documentation for the Social Media Aggregator project',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Replace with your server URL
                description: 'Local development server',
            },
            // Add more servers if needed
        ],
    },
    apis: ['./routes/*.js'], // Path to your API route files
};

const specs = swaggerJsdoc(options);

module.exports = {
    serveSwaggerUI: swaggerUi.serve,
    setupSwaggerUI: swaggerUi.setup(specs),
    specs,
};
