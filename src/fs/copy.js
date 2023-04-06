import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const filePath = path.join(dirname, 'files');
const filePathCopy = path.join(dirname, 'files-copy');

const copy = async () => {
    // Write your code here
    fs.mkdir(filePathCopy, (err) => {
       if (err) throw Error('FS operation failed');
       else {
        fs.readdir(path.join(filePath), (error, files)=> {
            if (error) throw Error('FS operation failed');
            files.map(file => fs.copyFile(path.join(filePath, file), path.join(filePathCopy, file),(error) => {
                if (error) throw Error('FS operation failed');
                else {
                    console.log('Success');
                 } 
        }))})
       }
    }
    )
};

await copy();
