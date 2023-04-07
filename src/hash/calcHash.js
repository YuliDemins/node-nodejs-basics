import fs from 'fs';
import crypto from 'crypto';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    // Write your code here 
    fs.readFile(filePath, (error, data) => {
        if  (error) {
         throw Error('FS operation failed');
     } else {
        const hash = crypto.createHash('sha256').update(data).digest('hex');
        process.stdout.write(hash);
    }
    })
};

await calculateHash();