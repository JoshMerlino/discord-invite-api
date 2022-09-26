import { Request, Response } from "express";
import { readdir, readFile } from "fs/promises";
import { resolve } from "path";
import { storedData } from "../src/metrics/storedData";

export const route = [
	"metrics/:guild"
];

export default async function api(req: Request, res: Response): Promise<void> {

	// Get guild from request
	const guild = req.params?.guild ?? req.query?.guild ?? req.body?.guild;

	// If guild is not provided
	if (!guild) {
		res.status(400).json({ message: "Guild ID is required", success: false });
		return;
	}

	// Try to get guild by id
	const store = await storedData(guild);

	res.json(store);

}
