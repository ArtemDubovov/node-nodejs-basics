import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'path';

const read = async () => {
    try {
        const filePath = fileURLToPath(import.meta.url);
        const fileDirname = path.dirname(filePath);
        const pathFile = path.resolve(fileDirname, 'files', 'fileToRead.txt');
        const readStream = createReadStream(pathFile).setEncoding('UTF-8');

        readStream.on('data', (chunk) => {
            console.log(chunk);
        });

    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await read();