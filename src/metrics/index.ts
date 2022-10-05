import chalk from "chalk";
import { Client, GatewayIntentBits } from "discord.js";
import { resolve } from "path";
import sampleGuild from "./sampleGuild";
import JSONStore from "filestore-json";

export const client = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences ] });

export const store = JSONStore.from<Record<string, Store>>(resolve("./data/guilds.json"));

export default function metrics() {
	client.login(process.env.DISCORD_TOKEN);
}

client.on("ready", function() {

	if (!client.user) {
		console.error("Could not log in.");
		return;
	}

	console.info(chalk.magenta("[DISCORD]"), "Logged in as", chalk.cyan(client.user.tag));

	(async function fetch() {
		setTimeout(fetch, 60000);
		const guilds = await client.guilds.fetch();
		await Promise.all(guilds.map(g => sampleGuild(g.id).then(g => store.value = { ...store.value, [g.id]: g })));
	}());

});
