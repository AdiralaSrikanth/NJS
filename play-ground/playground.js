const fs =  require('fs')

// const bufferData = fs.readFileSync('1-json.json')
// const dataJSON = bufferData.toString()

// const data = JSON.parse(dataJSON)
// console.log(data.name)

const readFileData = fs.readFileSync('1-json.json') //read json
const toJSON = readFileData.toString() //converts buffer data to string here it is json
const toObjData = JSON.parse(toJSON)  //converts json to obj
toObjData.name = 'srikanth'
toObjData.age = 25

const toJsonAgain = JSON.stringify(toObjData)
fs.writeFileSync('1-json.json', toJsonAgain)















// const bookObj = {
//     name: 'Node js',
//     writtenBy: 'Andrew mead'
// }
// // console.log('Book Name: ' , bookObj.name)

// const bookJson = JSON.stringify(bookObj)

// // fs.writeFileSync('1-json.json', bookJson)

// const bufferData = fs.readFileSync('1-json.json')
// console.log(bufferData.toString())

// // console.log(bookJson)

// const parsedBookJson = JSON.parse(bookJson)
// console.log(parsedBookJson.name)






// console.log('Before the argument values')
// console.log(process);

// console.log(process.argv);

// console.log('After the argument values')
// console.log(process);
