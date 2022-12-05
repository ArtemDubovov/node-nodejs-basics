import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import fileA from './files/a.json' assert {type: 'json'};
import fileB from './files/b.json' assert {type: 'json'};
import { fileURLToPath } from 'url';

const pathFile = fileURLToPath(import.meta.url);

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = fileA;
} else {
    unknownObject = fileB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${pathFile}`);
console.log(`Path to current directory is ${path.dirname(pathFile)}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
