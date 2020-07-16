// let re = /saitech/i //i -> case insensitive

// #### RegEx Functions

// exec function
// let str = "I am at Saitech informatics"
// let result = re.exec(str)
// console.log(result)

// test function
// let str = "I am at Saitech informatics"
// let result = re.test(str)
// console.log(result)

// match function
// let str = "I am at Saitech informatics"
// let result = str.match(re)
// console.log(result)

// search function
// let str = "I am at Saitech informatics"
// let result = str.search(re)
// console.log(result)

// // replace function
// let str = "I am at Saitech informatics"
// let result = str.replace(re, 's@itech')
// console.log(result)



// #### Metacharacters
let re = /^saitech/i
re = /^saitech informatics$/i
re = /s.itech/i
re = /s*itech/i
re = /sa?i?tech informatics\!$/i


// ### Brackets

re = /[A-Z][^eE][0-9][0-9][0-9]/

// ### Braces
re = /sa{2,3}ye{2,}/i

// ### Parantheses 

re = /([A-Z]X){3}/i

// ### short hand characters

re = /\w/

let str = "$^%$##wa$^$$@a"
console.log(re.exec(str))


if (re.test(str)) {
    console.log(`${str} matches ${re.source}`)
} else {
    console.log(`${str} does not match ${re.source}`)
}
