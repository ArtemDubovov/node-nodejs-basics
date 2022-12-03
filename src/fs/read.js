import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'path';

const read = async () => {
    try {
        const filename = fileURLToPath(import.meta.url);
        const fileDirname = path.dirname(filename);
        const pathFile = path.resolve(fileDirname, 'files', 'fileToRead.txt');
        const contentFile = await readFile(pathFile, { encoding: 'utf-8' }, (err) => {
            if (err) throw new Error('FS operation failed');
        });
        console.log(contentFile);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await read();