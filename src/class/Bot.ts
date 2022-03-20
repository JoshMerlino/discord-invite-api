/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */
import { Client, Intents } from "discord.js";

export default class Bot {

    public static client = new Client({
    	intents: [
    		Intents.FLAGS.GUILDS,
    		Intents.FLAGS.GUILD_MEMBERS,
    		Intents.FLAGS.GUILD_INVITES,
    		Intents.FLAGS.GUILD_PRESENCES
    	]
    });

    private constructor() { }

}
