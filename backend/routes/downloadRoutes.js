import express from 'express'

const router = express.Router()

router.post('/analyze', (req, res) => {

    const { url } = req.body

    if (!url) {
        return res.status(400).json({
            success: false,
            message: 'URL is required'
        })
    }

    res.json({
        success: true,
        message: 'URL analyzed successfully',
        url
    })

})

export default router