import { Request, Response } from "express";
import { storedData } from "../src/metrics/storedData";

export const route = [
	"metrics/:guild"
];

export default function api(req: Request, res: Response): void {

	// Get guild from request
	const guild = req.params?.guild ?? req.query?.guild ?? req.body?.guild;

	// If guild is not provided
	if (!guild) {
		res.status(400).json({ message: "Guild ID is required", success: false });
		return;
	}

	// Try to get guild by id
	const store = storedData(guild);

	// If guild is not found
	if (!store || store === null) {
		res.status(404).json({ message: "Guild not found", success: false });
		return;
	}

	// Send store
	res.json(store);

}
