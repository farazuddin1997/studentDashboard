const express = require("express");
const path = require('path')
const app = express()
const Hbs = require('hbs')
require('./db/conn')

const studentRegister = require('./models/register')


const port = process.env.PORT || 3000

const static_path = path.join(__dirname, '../public')

const templates_path = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname, '../templates/partials')


app.use(express.json())

app.use(express.urlencoded({extended:false}))

console.log(__dirname);

app.use(express.static(static_path))

app.set('view engine', "hbs")
app.set("views", templates_path)
Hbs.registerPartials(partials_path)


app.get('/', (req, res) => {
    // res.send("hello ths is full mern")
    res.render('index')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register',   async (req, res) => {
    try {

        console.log(req.body);
        const register = new studentRegister({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        })

        const registered = await register.save()
        res.status(201).render('index')
        
    } catch (error) {
        res.status(400).send(error)
    }
})


app.listen(port, () => {
    console.log(`connected at ${port}`);
})
