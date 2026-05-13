import { exec } from 'child_process'

export const analyzeVideo = async (req, res) => {

    try {

        const { url } = req.body

        if (!url) {
            return res.status(400).json({
                success: false,
                message: 'URL is required'
            })
        }

        const command = `./tools/yt-dlp.exe -j "${url}"`

        exec(command, (error, stdout, stderr) => {

            if (error) {

                console.log(error)

                return res.status(500).json({
                    success: false,
                    message: 'Failed to analyze video'
                })

            }

            const videoData = JSON.parse(stdout)

            res.json({
                success: true,
                title: videoData.title,
                thumbnail: videoData.thumbnail,
                duration: videoData.duration,
                uploader: videoData.uploader,
                formats: videoData.formats
            })

        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: 'Server Error'
        })

    }

}
