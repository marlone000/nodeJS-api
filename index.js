const express = require ('express')
const app = express()

const herois = ["Miranha", "Verdrugo", "MisterS marvel"]



// endpoint listagem de todos os herois (READ ALL => [GET])
app.get("/heroes", function (req, res){
    res.send(herois)
})


app.get("/heroes/:id", function (req, res){
    // acessar o parametro rota id
    const id = req.params.id

    const umheroi = herois[id]

    res.send(umheroi)
})

// app.post()
// app.put()
// app.delete()



app.listen(3000)