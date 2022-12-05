import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const read = async () => {
    try {
        const content = await fs.readFile(
            join(__dirname, "files", "fileToRead.txt"),
            {
                encoding: "utf-8",
            }
        );
        console.log(content);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await read();
