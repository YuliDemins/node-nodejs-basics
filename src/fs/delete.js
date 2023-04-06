import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const filePath = path.join(dirname, 'files');
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