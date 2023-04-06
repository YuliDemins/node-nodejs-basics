import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRead.txt')
const read = async () => {
    // Write your code here 
    const readStream = fs.createReadStream(filePath);

    readStream.on('data', (data) => process.stdout.write(data));
    readStream.on('error', (error) => {
        if (error) {
            throw Error('FS operation failed');
        }
    });
    
};

await read();