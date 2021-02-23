module.exports = function check(str, bracketsConfig) {
    let openingBrackets = [];
    let closingBrackets = [];
    let singleBrackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        const openingBracket = bracketsConfig[i][0];
        const closingBracket = bracketsConfig[i][1];
        if (openingBracket === closingBracket) {
            singleBrackets.push(openingBracket);
        }  else {
            openingBrackets.push(openingBracket);
            closingBrackets.push(closingBracket);
        }
    }
    if (str.length <= 1)
    return false

    let matchingOpeningBracket, ch
    let stack = []

    for (let i = 0; i < str.length; i++) {
        ch = str[i]

        if (singleBrackets.indexOf(ch) > -1) {
            const topElement = stack.length ? stack[stack.length - 1] : null;
            if (topElement === ch) {
                stack.pop();
            } else {
                stack.push(ch);
            }
        } else if (closingBrackets.indexOf(ch) > -1) {
            matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
            if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
                return false
            }
        } else {
            stack.push(ch)
        }
    }

    return (stack.length == 0);
}

