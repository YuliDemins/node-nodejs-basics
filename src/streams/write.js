import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToWrite.txt')

const write = async () => {
    // Write your code here 
    const writeStream = fs.createWriteStream(filePath);

    process.stdin.on('data', (data) => {
        writeStream.write(data, 'utf-8', (error) => {
        if (error) {
            throw Error('FS operation failed');
        } else {
            console.log('Success');
        }
      });
      writeStream.end();
    });
};

await write();