import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, `${String(chunk).split('').reverse().join('')}\n`);
        }
    });

    stdin.pipe(transformStream).pipe(stdout);
};

await transform();