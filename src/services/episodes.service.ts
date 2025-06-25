import { getPodcastData } from "../repository/podcast.repository";


export const serviceListEpisodes = async () => {
    const data = await getPodcastData();
    return data;
};

export const serviceFilterEpisodes = async (field?: "category" | "episodio", value?: string) => {
    return await getPodcastData(field, value);
};

