import { readdir } from 'node:fs/promises';
import path from 'path'

import { fileURLToPath } from 'url';

const list = async () => {
    try {
        const filename = fileURLToPath(import.meta.url);
        const fileDirname = path.dirname(filename);
        const files = await readdir(path.resolve(fileDirname, 'files'));
        console.log(files);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await list();