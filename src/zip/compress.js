import zlib from "zlib";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const compress = async () => {
    const rs = fs.createReadStream(
        join(__dirname, "files", "fileToCompress.txt")
    );
    const ws = fs.createWriteStream(join(__dirname, "files", "archive.gz"));
    const gzip = zlib.createGzip();

    rs.pipe(gzip).pipe(ws);
};

await compress();
