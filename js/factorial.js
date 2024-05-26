exports.factorial = function(num) {
    let answer = 1
    for (i = num; i > 0; i--) {
        answer = answer * i
    }
    return answer
};
