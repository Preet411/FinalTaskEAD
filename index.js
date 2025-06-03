const express = require("express")
const mongoose = require('mongoose')
const { title } = require("process")
const schema = require('Schema')
const Book = require('book')

const app = express()

const dbURI = 'mongodb+srv://Preet:Preet123@cluster0.xevdvdo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
 mongoose.connect(dbURI)
 .then(()=>{
    app.listen(8081)
 })
 .catch((err)=>{
    console.log(err)
 })

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
 app.get('/books/id:', ()=>{
    Book.find()
    Book.save()
    
 })
 const schema = bookSchema({
    title : 'NewBook',
    author : 'XYZ'
 })

 app.post('/books', (req, res)=>{
    const newbook = req.body;
    res.send('NEW BOOK ADDED')
 })

 app.delete('/books/id:', (req, res)=>{
    const id = req.params.id;
    
     then((req, res )=>{
        console.log('Get all books')
    })
     .catch((err)=>{
        console.log(err)
     })
 })
