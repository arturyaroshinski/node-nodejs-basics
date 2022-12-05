import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    try {
        await fs.unlink(join(__dirname, "files", "fileToRemove.txt"));
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await remove();
