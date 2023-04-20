const express = require('express');
const app = express();
const { login,findData,updateUser } = require('./Controllers/students.controller');
const cors = require('cors');
const mongoose = require('mongoose');
const tableDataRouter = require('./Routes/findStudentData');
//  const Student=require('./Models/students.model')

(() => {
    reqConfig();
    routersConfig();
    
})();


function reqConfig() {
    app.use(cors());
    app.use(express.json());

}



mongoose.connect("mongodb+srv://sanju:sanju%40123@cluster0.nrpylpw.mongodb.net/Data?retryWrites=true&w=majority",


    console.log("Database connected successfully")

);



function routersConfig() {
    app.use('/', tableDataRouter)
}

module.exports = app
