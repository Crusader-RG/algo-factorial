const factorial = (num) => {
    let answer = 1
    for (i = num; i > 0; i--) {
        answer = answer * i
    }
    return answer
};

module.exports = factorial;