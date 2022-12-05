import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rename = async () => {
    try {
        await fs.rename(
            join(__dirname, "files", "wrongFilename.txt"),
            join(__dirname, "files", "properFilename.md")
        );
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await rename();
