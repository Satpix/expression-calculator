

function expressionCalculator(expr) {
    return eval(expr)
}

module.exports = {
    expressionCalculator
}
// function expressionCalculator(expr) {
//     s = expr.split('');
//     let v = 0;
//     for (let i = 0; i < s.length - 1; i++) {
//         if (Number(s[i])) {
//             // console.log('s[i]:'+s[i]+'s[i+1]:'+s[i+1])
//             if (Number(s[i+1])) {
//                 v = s[i] + s[i + 1]
//                 s.splice(i, 2, v)
//                 i--;
//             }
//         }
//     }
//     // for (let i = 0;i<s.length;i++){
//     //     let start=0;
//     //     let end=0;
//     //     if(s[i]=='('){
//     //         start=i
//     //     }
//     // }
//     for (let i = 1; i < s.length - 1; i++)
//     {
//         if (s[i] == '*') {
//             v = parseFloat(s[i - 1]) * parseFloat(s[i + 1])
//             s.splice(i - 1, 3, v)
//             i=i-2;
//         } else if (s[i] == '/') {
//             v = parseFloat(s[i - 1]) / parseFloat(s[i + 1])
//             s.splice(i - 1, 3, v)
//             i=i-2;
//         }
//     }
//     for (let i = 1; i < s.length - 1; i++)
//     {
//         if (s[i] == '+') {
//             v = parseFloat(s[i - 1]) + parseFloat(s[i + 1])
//             s.splice(i - 1, 3, v)
//             i=i-2;
//         } else if (s[i] == '-') {
//             v = parseFloat(s[i - 1]) - parseFloat(s[i + 1])
//             s.splice(i - 1, 3, v)
//             i=i-2;
//         }
//     }
//     console.log(s)
//     return(parseFloat(s.join('')))
// }
//
// console.log(expressionCalculator('35+422*71-2+3-43'))