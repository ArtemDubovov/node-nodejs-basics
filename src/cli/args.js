import { argv } from 'node:process';

const parseArgs = () => {
    const args = argv.slice(2);
    const result = args.reduce((acc, current, index) => index % 2 === 0 ? acc += current.slice(2) : acc += ` is ${current}${index === args.length - 1 ? '' : ', '}`, '');
    console.log(result);
};

parseArgs();