import { rename as renameFs } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const filename = fileURLToPath(import.meta.url);
    const fileDirname = path.dirname(filename);
    renameFs(path.resolve(fileDirname, 'files', 'wrongFilename.txt'), path.resolve(fileDirname, 'files', 'properFilename.md'), (err) => {
        if (err) throw new Error('FS operation failed');
    })
};

await rename();