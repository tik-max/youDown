import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import downloadRoutes from './routes/downloadRoutes.js'

dotenv.config()

const app = express()

app.use(cors({
    origin: '*'
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('YouTube Downloader Backend Running')
})

app.use('/api', downloadRoutes)

const PORT = process.env.PORT || 5000

import { exec } from 'child_process'

app.get('/test-ffmpeg', (req, res) => {

    exec('ffmpeg -version', (error, stdout, stderr) => {

        if (error) {
            return res.status(500).json({
                success: false,
                message: 'FFmpeg not installed',
                error: error.message
            })
        }

        res.json({
            success: true,
            message: 'FFmpeg installed successfully',
            data: stdout
        })

    })

})

app.get('/test-ytdlp', (req, res) => {

    exec('yt-dlp --version', (error, stdout, stderr) => {

        if (error) {
            return res.status(500).json({
                success: false,
                message: 'yt-dlp not installed',
                error: error.message
            })
        }

        res.json({
            success: true,
            message: 'yt-dlp installed successfully',
            version: stdout
        })

    })

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
