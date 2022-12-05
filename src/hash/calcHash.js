import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import path from 'path';

const calculateHash = async () => {
    try {
        const filename = fileURLToPath(import.meta.url);
        const fileDirname = path.dirname(filename);
        const filePath = path.resolve(fileDirname, 'files', 'fileToCalculateHashFor.txt');

        const hash = createHash('sha256');
        hash.update(filePath);
        const result = hash.digest('hex');

        console.log(result);
    } catch (e) {
        throw new Error(e);
    }
};

await calculateHash();