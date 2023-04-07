import fs from 'fs';
import zlib from 'zlib';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files');

const compress = async () => {
    // Write your code here 
    const readStream = fs.createReadStream(path.join(filePath, 'fileToCompress.txt'));
    const writeStream = fs.createWriteStream(path.join(filePath, 'archive.gz'));
    const gzip = zlib.createGzip();
    readStream.pipe(gzip).pipe(writeStream);

    readStream.on('error', (error) => {
        if (error) {
            throw Error('FS operation failed');
        }
    });
    writeStream.on('error', (error) => {
        if (error) {
            throw Error('FS operation failed');
        }
    });
    gzip.on('error', (error) => {
        if (error) {
            throw Error('FS operation failed');
        }
    });
};

await compress();