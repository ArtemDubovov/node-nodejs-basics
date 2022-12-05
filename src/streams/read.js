import { createReadStream } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { stdout } from 'node:process';

const read = async () => {
    try {
        const pathFile = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');
        const readStream = createReadStream(pathFile).setEncoding('utf-8');

        readStream.on('data', (chunk) => {
            stdout.write(chunk);
        });
    } catch (e) {
        throw new Error(e);
    }
};

await read();