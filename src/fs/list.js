import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const list = async () => {
    try {
        const files = await fs.readdir(join(__dirname, "files"));
        files.forEach((e) => console.log(e));
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await list();
