const express = require ('express')
const app = express()

app.get("/", function (req, res){
    res.send("hello world")
})

app.get("/ptbr", function (req, res){
    res.send("Olá mundo")
})

app.post()
app.put()
app.delete()



app.listen(3000)