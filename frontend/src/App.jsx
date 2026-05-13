export default function App() {

  return (

    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-gray-800">

        <h1 className="text-3xl font-bold text-red-500">
          YT Downloader
        </h1>

        <nav className="flex gap-6 text-gray-300">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
        </nav>

      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">

        <h2 className="text-6xl font-black max-w-4xl leading-tight">
          Download YouTube Videos & MP3
        </h2>

        <p className="text-gray-400 mt-6 text-lg">
          Fast, modern and beautiful downloader experience
        </p>

        {/* URL BOX */}
        <div className="flex gap-4 mt-10 w-full max-w-3xl">

          <input
            type="text"
            placeholder="Paste YouTube URL..."
            className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 outline-none"
          />

          <button className="bg-red-600 hover:bg-red-500 px-8 rounded-xl font-semibold">
            Analyze
          </button>

        </div>

        {/* OPTIONS */}
        <div className="flex gap-6 mt-8">

          <select className="bg-gray-900 border border-gray-700 rounded-xl px-5 py-3">
            <option>MP4 Video</option>
            <option>MP3 Audio</option>
          </select>

          <select className="bg-gray-900 border border-gray-700 rounded-xl px-5 py-3">
            <option>1080p</option>
            <option>720p</option>
            <option>480p</option>
          </select>

        </div>

      </section>

      {/* RESULT CARD */}
      <section className="flex justify-center px-6 pb-20">

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 max-w-2xl w-full">

          <img
            src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1200"
            alt="thumbnail"
            className="rounded-2xl w-full h-80 object-cover"
          />

          <h3 className="text-2xl font-bold mt-6">
            Chill Music Playlist
          </h3>

          <p className="text-gray-400 mt-2">
            52 videos • HD Quality
          </p>

          <div className="flex gap-4 mt-6">

            <button className="flex-1 bg-red-600 hover:bg-red-500 py-4 rounded-xl font-semibold">
              Download MP4
            </button>

            <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-4 rounded-xl font-semibold">
              Download MP3
            </button>

          </div>

        </div>

      </section>

    </div>

  )
}
