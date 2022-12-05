import { rm } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const filename = fileURLToPath(import.meta.url);
    const fileDirname = path.dirname(filename);
    rm(path.resolve(fileDirname, 'files', 'fileToRemove.txt'), (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

await remove();