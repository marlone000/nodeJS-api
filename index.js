const express = require ('express')
const app = express()

const herois = ["Miranha", "Verdrugo", "MisterS marvel"]



// endpoint listagem de todos os herois (READ ALL => [GET])
app.get("/heroes", function (req, res){
    res.send(herois)
})

// endpoint listagem de 1 heroi (READ SINGLE => [GET])
app.get("/heroes/:id", function (req, res){
    // acessar o parametro rota id
    const id = req.params.id
// pego item do array
    const umheroi = herois[id]
// eu envio um item como resposta
    res.send(umheroi)
})


app.use(express.json())
// endpoint de criação (CREATE => [POST])
app.post("/heroes", function (req, res){
    res.send(req.body)
})

// app.post()
// app.put()
// app.delete()



app.listen(3000)