import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const filePath = path.join(__dirname, 'files');

const list = async () => {
    // Write your code here 
    fs.readdir(path.join(filePath), (error, files)=> {
        if (error) throw Error('FS operation failed');
        files.map(file => file.name);
        console.log(files);
    })    
};

await list();