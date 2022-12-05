import { copyFile, stat, mkdir, fstat } from 'fs';
import { readdir } from 'node:fs/promises';
import path from 'path'

import { fileURLToPath } from 'url';

const copy = async () => {
    try {
        const filename = fileURLToPath(import.meta.url);
        const fileDirname = path.dirname(filename);
        const pathFiles = path.resolve(fileDirname, 'files');
        const pathFilesCopy = path.resolve(fileDirname, 'files_copy');

        const files = await readdir(pathFiles);
        mkdir(path.resolve(pathFilesCopy), (err) => {
            if (err) throw new Error('FS operation failed');
        });

        files.map(file => {
            stat(path.resolve(pathFiles, file), (err, stats) => {
                if (stats.isFile()) {
                    copyFile(path.resolve(pathFiles, file), path.resolve(pathFilesCopy, file), (err) => {
                        if (err) throw new Error('FS operation failed');
                    });
                }
            });
        });

    } catch (e) {
        throw new Error('FS operation failed');
    }

};

copy();