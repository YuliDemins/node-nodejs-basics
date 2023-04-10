import { fork } from 'child_process';  
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    // Write your code here
    const childProcess = fork(filePath, args, { stdio: ['pipe', 'pipe', 'inherit', 'ipc'] });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
