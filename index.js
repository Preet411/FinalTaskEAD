const express = require("express")
const mongoose = require('mongoose')
const { title } = require("process")
const app = express()

const dbURI = 'mongodb+srv://Preet:Preet123@cluster0.xevdvdo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
 mongoose.connect(dbURI)
 