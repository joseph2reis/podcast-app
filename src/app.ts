import { parse } from 'url';
import { getFilterEpisodes, getListEpisodes } from './controllers/podscasts.controller';
import http from 'http';

export async function handleRequest(req: http.IncomingMessage, res: http.ServerResponse) {
    if (!req.url) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Bad Request');
        return;
    }

    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (req.method === 'GET') {
        switch (pathname) {
            case '/list':
                await getListEpisodes(req, res);
                break;

            case '/episodes':
                await getFilterEpisodes(req, res, query);
                break;

            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not Found');
                break;
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
}