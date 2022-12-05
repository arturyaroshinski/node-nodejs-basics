import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const read = async () => {
    const rs = fs.createReadStream(join(__dirname, "files", "fileToRead.txt"));
    rs.pipe(process.stdout);
};

await read();
