import fastify, { RouteOptions, FastifyReply, FastifyRequest, FastifyInstance, FastifyPluginCallback } from 'fastify';
import fastifyStatic, { FastifyStaticOptions } from 'fastify-static';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const Static: FastifyPluginCallback<FastifyStaticOptions> = fastifyStatic;

const allowedUrls = ['/home', '/faq', '/bans', '/vote', '/rules', '/staff'];
const buffer404ErrorPage = fs.readFileSync('404.html');

const webPath: string = path.join(__dirname, '../dist');

const server: FastifyInstance = fastify({ logger: false });

server.setNotFoundHandler((request: FastifyRequest, reply: FastifyReply) => {
    const url = request.url;
    if (!allowedUrls.includes(url)) return reply.type('text/html').send(buffer404ErrorPage);
    reply.sendFile('./index.html')
})

server.get("/bans", async (req, res) => {
    return res.redirect("https://www.eusurvival.com/bans-/bans.php")
})


server.register(Static, { root: webPath, prefix: '/*' });

server.listen(3001);

