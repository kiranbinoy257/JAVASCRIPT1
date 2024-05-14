let str1="cat eat  Food"
let str2="r"
let str3="bat"


let reg=/[^a-c]/

console.log(reg.test(str1));
console.log(reg.test(str2));
console.log(reg.test(str3));