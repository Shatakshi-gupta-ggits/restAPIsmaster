import express from "express";


const app = express();

//Routes -- urls

//Http methods - get, post , put , patch, delete
app.get('/', (req, res, next) => {
   
    res.json({message: "welcome to my apis"})
});



export default app;