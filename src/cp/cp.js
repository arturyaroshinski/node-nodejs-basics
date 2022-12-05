import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) =>
    fork(`${join(__dirname, "files", "script.js")}`, args);

spawnChildProcess(/*["arg1", "arg2"]*/);
