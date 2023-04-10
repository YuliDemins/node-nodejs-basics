import fs from 'fs';
import zlib from 'zlib';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files');

const decompress = async () => {
    // Write your code here 
    const readStream = fs.createReadStream(path.join(filePath, 'archive.gz'));
    const writeStream = fs.createWriteStream(path.join(filePath, 'fileToCompress.txt'));
    const gunzip = zlib.createGunzip();
    readStream.pipe(gunzip).pipe(writeStream);

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
    gunzip.on('error', (error) => {
        if (error) {
            throw Error('FS operation failed');
        }
    });
};

await decompress();