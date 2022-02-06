function success(res) {
    console.log(res);
}

function error(err) {
    console.warn(err);
}

function main(a, b, s) {
    if (s) {
        a('Happy coding with javascript');
    } else {
        b('unable to write code in javascript');
    }
}

main(success, error);