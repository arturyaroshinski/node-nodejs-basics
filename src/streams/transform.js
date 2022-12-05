import { stdin, stdout } from "process";
import { Transform, pipeline } from "stream";
import { EOL } from "os";

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const chunkStr = chunk.toString();
            const reversed = chunkStr
                .replace(EOL, "")
                .split("")
                .reverse()
                .join("");

            callback(null, reversed + EOL);
        },
    });

    pipeline(stdin, reverse, stdout, (error) => console.log(error));
};

await transform();
