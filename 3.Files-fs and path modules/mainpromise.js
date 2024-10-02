
import fs from "fs/promises"

let a = await fs.readFile("Mehedi.txt")

console.log(a.toString())

//overwrite the whole text
let b = await fs.writeFile("Mehedi.txt"," this as an amazing promises")

let c = await fs.appendFile("Mehedi.txt","\n I am append")



 