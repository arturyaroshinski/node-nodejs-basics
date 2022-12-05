import os from "os";
import { Worker } from "worker_threads";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const performCalculations = async () => {
    const cpus = os.cpus();

    const result = await Promise.allSettled(
        cpus.map(
            (_, idx) =>
                new Promise((res, rej) => {
                    const worker = new Worker(join(__dirname,"worker.js"), {
                        workerData: 10 + idx,
                    });

                    worker.on("message", (data) =>
                        res({ status: "resolved", data })
                    );
                    worker.on("error", rej);
                })
        )
    );

    const transformedResult = result.map(
        (res) => res.value ?? { status: "error", data: null }
    );

    console.log(transformedResult);
};

await performCalculations();
