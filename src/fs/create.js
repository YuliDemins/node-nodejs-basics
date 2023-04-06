import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const filePath = path.join(dirname, 'files');

const create = async () => {
    // Write your code here 

    fs.readdir(filePath, (error, files) => {
        if (error) {
            console.error('FS operation failed')
        }

        if (files.includes('fresh.txt')) console.error('FS operation failed');
        else {
            fs.writeFile(path.join(filePath, 'fresh.txt'), 'I am fresh and young', (error) => {
                if (error) console.error('FS operation failed');
            })
        }
    });
};

await create();