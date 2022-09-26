import { readdir, unlink } from "fs/promises";
import { resolve } from "path";

export default async function purge() {
	const files = await readdir(resolve("./data"));
	await Promise.allSettled(files.map(file => unlink(resolve(`./data/${file}`))));
}
