import chalk from "chalk";
import { resolve } from "path";

const CACHE_DURATION = 60000;

let cachedAt = 0;
let cache: Record<string, Store> = {};

export function storedData(guild: string): Store | null {

	if (Date.now() > cachedAt + CACHE_DURATION) {
		cachedAt = Date.now();
		cache = require(resolve("./data/guilds.json"));
		console.info("   ", chalk.blue("^^"), "Refreshing cached response...");
	}

	if (cache.hasOwnProperty(guild)) {
		return cache[guild];
	}

	for (const g of Object.values(cache)) {
		if (g.inviteCodes.includes(guild)) {
			return g;
		}
	}

	return null;

}
