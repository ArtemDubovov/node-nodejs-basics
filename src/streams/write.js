import { stdin } from 'node:process';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { createWriteStream } from 'node:fs';

const write = async () => {
    try {
        const pathModule = fileURLToPath(import.meta.url);
        const pathDir = path.dirname(pathModule);
        const pathFile = path.resolve(pathDir, 'files', 'fileToWrite.txt');

        const writeStream = createWriteStream(pathFile, 'utf-8');

        stdin.pipe(writeStream);
    } catch (e) {
        throw new Error(e);
    }
};

await write();