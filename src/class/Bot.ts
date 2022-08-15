/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */
import { Client, GatewayIntentBits as Intents } from "discord.js";

export default class Bot {

    public static client = new Client({
    	intents: [
    		Intents.Guilds,
    		Intents.GuildMembers,
    		Intents.GuildInvites,
    		Intents.GuildPresences
    	]
    });

    private constructor() { }

}
