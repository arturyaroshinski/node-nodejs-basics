import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const create = async () => {
    try {
        const path = join(__dirname, "files", "fresh.txt");
        await fs.writeFile(path, "I am fresh and young", {
            flag: "wx",
        });
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await create();
