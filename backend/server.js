import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Backend is running')
})

app.post('/analyze', (req, res) => {

    const { url } = req.body

    console.log(url)

    res.json({
        success: true,
        message: 'URL received successfully',
        url
    })

})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})