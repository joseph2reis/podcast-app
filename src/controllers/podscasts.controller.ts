import { IncomingMessage, ServerResponse } from "http"
import { serviceFilterEpisodes, serviceListEpisodes } from "../services/episodes.service";
import { ParsedUrlQuery } from "querystring";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const data = await serviceListEpisodes();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse,
    query: ParsedUrlQuery
) => {
    let field: "category" | "episodio" | undefined;
    let value: string | undefined;

    if ('category' in query) {
        field = 'category';
        value = String(query.category);
    } else if ('episodio' in query) {
        field = 'episodio';
        value = String(query.episodio);
    } else if (Object.keys(query).length > 0) {
        // Se veio algum query param diferente de category ou episodio, dá erro
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            error: 'Parâmetro de filtro inválido. Use apenas ?category=... ou ?episodio=...'
        }));
        return;
    }

    try {
        const data = await serviceFilterEpisodes(field, value);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            error: 'Erro interno no servidor.',
            details: String(error)
        }));
    }
};

