import { createUnzip } from 'node:zlib';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    try {
        const pathDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'files');
        const pathFile = path.resolve(pathDir, 'fileToCompress.txt');
        const pathZip = path.resolve(pathDir, 'archive.gz');

        const readStream = createReadStream(pathZip);
        const writeStream = createWriteStream(pathFile);
        const zlibStream = createUnzip();

        readStream.pipe(zlibStream).pipe(writeStream);

    } catch (e) {
        console.log(e);
    }
};

await decompress();