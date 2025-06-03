const express = require("express")
const mongoose = require('mongoose')
const { title } = require("process")
const schema = require('Schema')

const app = express()

const dbURI = 'mongodb+srv://Preet:Preet123@cluster0.xevdvdo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
 mongoose.connect(dbURI)

 const bookSchema = new createSchema ({
    title : String ,
    author : String 
 })
 app.get('/books', (req, res)=> {

    then((req, res )=>{
        console.log('Get all books')
    })
     .catch((err)=>{
        console.log(err)
     })
 })
 app.getElementByID('/books/id:', ()=>{
    
 })
