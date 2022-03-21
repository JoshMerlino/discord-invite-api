// Configure variables in environment file (.env)
import chalk from "chalk";
import dotenv from "dotenv";
import path from "path";
import JSONStore from "filestore-json";
import Bot from "./class/Bot";
dotenv.config();

// Log in
Bot.client.login(process.env.DISCORD_TOKEN);

// Hopefully this dosnt happen
Bot.client.on("rateLimit", function(rateLimit) {
	console.warn(chalk.magenta("[DISCORD]"), `Rate limit exceeded: ${rateLimit.limit} requests in ${rateLimit.timeout}ms`);
});

// Ready the bot
Bot.client.on("ready", async function() {

	// Log bot connected
	console.info(chalk.magenta("[DISCORD]"), "Logged in as", chalk.cyan(Bot.client.user?.tag));

	// Make bot invisible
	Bot.client.user?.setStatus("invisible");

	// Initialize storages
	const storage = JSONStore.from<Record<string, ServerStat>>(path.resolve("storage.json"));

	// Iterate over each guild
	(async function fetch() {

		const guilds = Bot.client.guilds.cache;
		await Promise.all(guilds.map(async function(guild, id) {

			const { name, ownerId, verified, memberCount } = await guild.fetch();
			const owner = Bot.client.users.cache.get(ownerId)!.tag;
			await guild.invites.fetch();

			storage.value = {
				...storage.value,
				[id]: {
					id,
					owner,
					ownerId,
					name,
					verified,
					memberCount,
					memberOnline: guild.members.cache.filter(member => member.presence?.status !== "offline").size,
					bannerURL: guild.bannerURL(),
					iconURL: guild.iconURL(),
					inviteCodes: guild.invites.cache.map(invite => invite.code)
				}
			};

		}));

		setTimeout(fetch, 1000);

	}());

});
