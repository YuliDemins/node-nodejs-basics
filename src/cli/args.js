const parseArgs = () => {
    // Write your code here 
    let props = process.argv;
    let arr = props.slice(2);
    const obj = {};

    arr.map((i, index) => {
        if (index % 2 == 0) obj[i] = arr[index + 1]
    })

    const res = []
    for (let key in obj) {
        res.push(`${key.slice(2)} is ${obj[key]}`)
    }
    console.log(res.join(', '))
};

parseArgs();