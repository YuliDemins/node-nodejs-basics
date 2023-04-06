import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const filePath = path.join(dirname, 'files', 'fileToRead.txt');

const read = async () => {
    // Write your code here 

    fs.readFile(filePath, 'utf-8', (error, data) => {
       if  (error) {
        console.error('FS operation failed');
        // throw new Error('FS operation failed')
    } else console.log(data)
})

    
};

await read();