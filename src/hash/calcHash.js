import crypto from "crypto";
import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const calculateHash = async () => {
    const fileBuffer = await fs.readFile(
        join(__dirname, "files", "fileToCalculateHashFor.txt")
    );

    const hash = crypto.createHash("sha256").update(fileBuffer).digest("hex");

    console.log(hash);
};

await calculateHash();
