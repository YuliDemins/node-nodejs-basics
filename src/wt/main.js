import { Worker } from 'worker_threads';
import os from 'os';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    // Write your code here
    const threads = os.cpus().length;
    const promises = [];
  
    for (let i = 0; i < threads; i++) {
      const promise = new Promise((resolve) => {
        const worker = new Worker((path.join(__dirname, './worker.js')));
        worker.on('message', (result) => {
          resolve({ status: 'resolved', data: result });
        });
        worker.on('error', (error) => {
          resolve({ status: 'error', data: null });
        });
        worker.postMessage(i + 10);
      });
      promises.push(promise);
    }
    const results = await Promise.allSettled(promises);
    return results.map((result) => console.log(result.value));
};

await performCalculations();