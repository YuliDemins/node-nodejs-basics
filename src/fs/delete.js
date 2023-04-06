import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files');

const remove = async () => {
    // Write your code here 
    fs.unlink(path.join(filePath, 'fileToRemove.txt'), (error) => {
        if (error) throw Error('FS operation failed');
        else {
            console.log('Success');
         } 
    })
};

await remove();