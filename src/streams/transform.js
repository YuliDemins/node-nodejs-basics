const transform = async () => {
    // Write your code here 
    process.stdin.on('data', (data) => {
        process.stdout.write(data.reverse())  
    });

    process.stdin.on('error', (error) => {
        if  (error) {
            throw Error('FS operation failed');
        }
      });
    process.stdout.on('error', (error) => {
        if  (error) {
            throw Error('FS operation failed');
        }
    });
};

await transform();