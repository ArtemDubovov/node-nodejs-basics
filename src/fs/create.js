import { appendFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const create = async () => {
    const filename = fileURLToPath(import.meta.url);
    const fileDirname = path.dirname(filename);
    appendFile(path.resolve(fileDirname, 'files', 'fresh.txt'), 'I am fresh and young', { flag: 'ax+' }, (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

await create();