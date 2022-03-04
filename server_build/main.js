"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_static_1 = __importDefault(require("fastify-static"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Static = fastify_static_1.default;
const allowedUrls = ['/home', '/faq', '/bans', '/vote', '/rules', '/staff'];
const buffer404ErrorPage = fs_1.default.readFileSync('404.html');
const webPath = path_1.default.join(__dirname, '../dist');
const server = (0, fastify_1.default)({ logger: false });
server.setNotFoundHandler((request, reply) => {
    const url = request.url;
    if (!allowedUrls.includes(url))
        return reply.type('text/html').send(buffer404ErrorPage);
    reply.sendFile('./index.html');
});
server.get("/bans", async (req, res) => {
    return res.redirect("https://www.eusurvival.com/bans-/bans.php");
});
server.register(Static, { root: webPath, prefix: '/*' });
server.listen(3001);
