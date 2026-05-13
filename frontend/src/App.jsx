import { useState } from 'react'

export default function App() {

  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const analyzeVideo = async () => {

    if (!url) {
      alert('Please enter YouTube URL')
      return
    }

    try {

      setLoading(true)

      const res = await fetch(
        'https://youdown-i0y2.onrender.com/api/analyze',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url }),
        }
      )

      const data = await res.json()

      setResponse(data)

    } catch (error) {

      console.log(error)

      alert('Server Error')

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-gray-800">

        <h1 className="text-3xl font-bold text-red-500">
          YT Downloader
        </h1>

      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">

        <h2 className="text-6xl font-black max-w-4xl leading-tight">
          Download YouTube Videos & MP3
        </h2>

        <p className="text-gray-400 mt-6 text-lg">
          Fast modern downloader experience
        </p>

        {/* INPUT */}
        <div className="flex gap-4 mt-10 w-full max-w-3xl">

          <input
            type="text"
            placeholder="Paste YouTube URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 outline-none"
          />

          <button
            onClick={analyzeVideo}
            className="bg-red-600 hover:bg-red-500 px-8 rounded-xl font-semibold"
          >

            {loading ? 'Loading...' : 'Analyze'}

          </button>

        </div>

        {/* RESPONSE */}
        {response && (

          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mt-10 w-full max-w-2xl">

            <h3 className="text-2xl font-bold text-green-400">
              Backend Connected Successfully
            </h3>

            <p className="mt-4 text-gray-300 break-all">
              {response.url}
            </p>

            <p className="mt-2 text-gray-400">
              {response.message}
            </p>

          </div>

        )}

      </section>

    </div>

  )
}
