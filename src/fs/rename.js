import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const filePath = path.join(dirname, 'files');

const rename = async () => {
    // Write your code here 
    fs.rename(path.join(filePath, 'wrongFilename.txt'), path.join(filePath, 'properFilename.md'), (error) => {
        if (error) throw Error('FS operation failed');
        else {
            console.log('Success');
         } 
    })
};

await rename();