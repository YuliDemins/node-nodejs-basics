import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const filePath = path.join(dirname, 'files');

const list = async () => {
    // Write your code here 
    fs.readdir(path.join(filePath), (error, files)=> {
        if (error) console.error('FS operation failed')
        files.map(file => file.name);
        console.log(files)
    })    
};

await list();