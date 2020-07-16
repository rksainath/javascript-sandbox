function nameIterator(names) {
    let nextIndex = 0

    return {
        next: function () {
            return nextIndex < names.length ? {
                value: names[nextIndex++], done: false
            } :
                {
                    done: true
                }
        }
    }
}


let data = ['Brad Traversy', 'Mosh Hamedani', 'Colt Steele']
let namelist = nameIterator(data)
// console.log(namelist.next())
// console.log(namelist.next())
// console.log(namelist.next())
// console.log(namelist.next())


function* generateID(){
    let id = 100

    while(true){
        yield `SAITECH-${id++}`
    }
}

const newID = generateID()
console.log(newID.next())
console.log(newID.next())
console.log(newID.next())
console.log(newID.next())
console.log(newID.next())
