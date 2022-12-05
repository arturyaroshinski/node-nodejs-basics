import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const filesFolderPath = join(__dirname, "files");
const filesCopyFolderPath = join(__dirname, "files_copy");

const copy = async () => {
    try {
        await fs.mkdir(filesCopyFolderPath);
        await fs.cp(filesFolderPath, filesCopyFolderPath, { recursive: true });
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await copy();
