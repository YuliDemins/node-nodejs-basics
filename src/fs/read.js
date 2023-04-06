import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    // Write your code here 

    fs.readFile(filePath, 'utf-8', (error, data) => {
       if  (error) {
        throw Error('FS operation failed');
    } else process.stdout.write(data);
})

    
};

await read();