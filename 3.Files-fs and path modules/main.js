
const fs = require("fs")

console.log(fs)

console.log("starting")


//file create as Mehedi.txt and the file contain I am created
// fs.writeFileSync("Mehedi.txt" ,"I am created")

//writefile better to use
fs.writeFile("Mehedi2.txt", " I am also created", () => {
    console.log("done")
})

//reading

fs.readFile("Mehedi2.txt", (error, data) => {
    console.log(error, data.toString())
})

//append something
fs.appendFile("Mehedi2.txt","new" ,(e,d)=>{
     console.log("append done")
})
console.log("Ending")