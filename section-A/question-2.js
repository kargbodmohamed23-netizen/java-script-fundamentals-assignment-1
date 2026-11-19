// loose vs strict Equality

let codeA = "100";
let codeB = 100;

console.log(codeA == codeB); // It compare value but allows to convert data type when necessary true
console.log(codeA === codeB); //  It checks two things : Are the values the same or are the data types the same the values look the same but the data types are different false
console.log(codeA != codeB); // It allows type conversation before comparing . both values are considered equal after conversion, the answer is false
console.log(codeA !== codeB); // It checked if the data types are different. is true
