const path = require('path');
const fastifyStatic = require('fastify-static');
const fastify = require('fastify')({
    logger: true
});


fastify.setNotFoundHandler(function (request, reply) {
    reply.sendFile('index.html')
});


fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'dist'),
    prefix: '/',
});

(async () => {
    try {
        await fastify.listen(3001)
    }
    catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
})();

