import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast.model";
import { FilterField } from "../types/FilterField";

const podcastDataPath = path.join(__dirname, "podcast.json");

export const getPodcastData = async (field?: FilterField, value?: string): Promise<Podcast[]> => {
    const data = await fs.promises.readFile(podcastDataPath, "utf-8");
    let podcasts: Podcast[] = JSON.parse(data);

    if (field && value) {
        const lowerValue = value.toLowerCase();

        podcasts = podcasts.filter((podcast) => {
            if (field === "category") {
                return podcast.category.some((cat) => cat.toLowerCase().includes(lowerValue));
            }
            if (field === "episodio") {
                return podcast.episodio.toLowerCase().includes(lowerValue);
            }
            return true;
        });
    }

    return podcasts;
};
