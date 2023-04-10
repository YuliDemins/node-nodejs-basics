import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files');

const create = async () => {
    // Write your code here 

    fs.readdir(filePath, (error, files) => {
        if (error) throw Error('FS operation failed');

        if (files.includes('fresh.txt')) throw Error('FS operation failed');
        else {
            fs.writeFile(path.join(filePath, 'fresh.txt'), 'I am fresh and young', (error) => {
                if (error) throw Error('FS operation failed');
            })
        }
    });
};

await create();