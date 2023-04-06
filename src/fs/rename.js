import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files');

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