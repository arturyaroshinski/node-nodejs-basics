import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const write = async () => {
    const ws = fs.createWriteStream(
        join(__dirname, "files", "fileToWrite.txt")
    );
    process.stdin.pipe(ws);
};

await write();
