const parseArgs = () => {
    const result = [];
    process.argv.slice(2).forEach((arg, idx, arr) => {
        if (arr[idx + 1] && arg.startsWith("--"))
            result.push(`${arg.substring(2)} is ${arr[idx + 1]}`);
    });

    console.log(result.join(", "));
};

parseArgs();
