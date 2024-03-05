const express = require('express')
const app = express()

app.get('/', (_req, res) => {
    res.status(200).send('Welcome to the payment system')
})
app.get(/^\/cart\/(\d+)$/, (req, res) => {
    const id = req.params[0]
    res.status(200).send(`Payment methods for cart ${id}`)
})
app.listen(7865, () => {
    console.log('API available on localhost port 7865')
})
module.exports = app
