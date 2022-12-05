import { createGzip } from 'node:zlib';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    try {
        const pathDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'files');
        const pathFile = path.resolve(pathDir, 'fileToCompress.txt');
        const pathZip = path.resolve(pathDir, 'archive.gz');

        const readStream = createReadStream(pathFile, 'utf-8');
        const writeStream = createWriteStream(pathZip);
        const zlibStream = createGzip();

        readStream.pipe(zlibStream).pipe(writeStream);

    } catch (e) {
        console.log(e);
    }
};

await compress();