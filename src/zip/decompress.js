import zlib from "zlib";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const decompress = async () => {
    const rs = fs.createReadStream(join(__dirname, "files", "archive.gz"));
    const ws = fs.createWriteStream(
        join(__dirname, "files", "fileToCompress.txt")
    );
    const unzip = zlib.createUnzip();

    rs.pipe(unzip).pipe(ws);
};

await decompress();
