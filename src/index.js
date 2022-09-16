const express = require("express")
const { convert } = require('./utils/convert')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {

    res.set('Access-Control-Allow-Origin', '*');

    const number = req.query.number
    try {
        const output = convert(number)
        return res.send({
            message: output
        })

    } catch (e) {
        return res.send({
            error: e
        })
    }

})

app.get('*', (req, res) => {
    res.send({
        error: "Looks like you went the wrong way"
    })
})

app.listen(port, () => {
    console.log("I am running, do not be scared")
})