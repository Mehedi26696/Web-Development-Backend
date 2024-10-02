

//this things callback hell
fs.writeFile("Mehedi2.txt", " I am also created", () => {
   console.log("done")
   fs.readFile("Mehedi2.txt", (error, data) => {
      console.log(error, data.toString())
   })
   // again
   fs.writeFile("Mehedi2.txt", " I am also created", () => {
      console.log("done")
      fs.readFile("Mehedi2.txt", (error, data) => {
         console.log(error, data.toString())
      })
      // again
      fs.writeFile("Mehedi2.txt", " I am also created", () => {
         console.log("done")
         fs.readFile("Mehedi2.txt", (error, data) => {
            console.log(error, data.toString())
         })
         // again
         fs.writeFile("Mehedi2.txt", " I am also created", () => {
            console.log("done")
            fs.readFile("Mehedi2.txt", (error, data) => {
               console.log(error, data.toString())
            })
            // again
         })
      })
   })
})