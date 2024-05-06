//imports express.js framework to create a webserver
import express from "express"
//imports the data that i retrieved from database.js using async function
import { getInfo } from "./database.js"
//Imports the path module from Node.js to work with file paths.
import path from "path"
import { getGlobals } from 'common-es';

const { __dirname, __filename } = getGlobals(import.meta.url);

//dirname=C:\Users\Dell\Desktop\oursystem3\oursystem\oursystem\web
//filename=app.js
//import.meta.url=C:\Users\Dell\Desktop\oursystem3\oursystem\oursystem\web\app.js

//creates an instance of express application('app)
const app = express()
const port = 8080;

app.use(express.static(path.join(__dirname, '')));
// users is a route in an express.js app to handle http req
app.get("/users", async (req,res)=> {
    try {
      //takes the data from getinfo and returns it in json format
        const info = await getInfo();
        res.json(info);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');}
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

  app.listen(port, ()=>{
    console.log(`Server is running on port ${port} at http://localhost:${port}`)
  })
