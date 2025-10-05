import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_2) // default placeholder
  const [isImageLoaded, setIsImageLoaded] = useState(false) // start with prompt box
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const { generateImage } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    setLoading(true)

    const generated = await generateImage(input)
    if (generated) {
      setImage(generated)
      setIsImageLoaded(true) // now show the image
    }

    setLoading(false)
  }

  return (
    <motion.form
      onSubmit={onSubmitHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center w-full px-4 py-10 bg-[#0a192f]"
    >

      {/* IMAGE DISPLAY */}
      {isImageLoaded && (
        <motion.div
          className="relative w-[90%] md:w-[60%] mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-3xl shadow-lg backdrop-blur-lg border border-yellow-200 bg-white/50">
            <img
              src={image}
              alt="Generated Result"
              className="w-full h-auto object-cover rounded-3xl transition-transform hover:scale-105 duration-500"
            />
            <span className="absolute top-3 right-3 bg-yellow-400 text-white px-3 py-1 text-xs font-semibold rounded-full shadow">
              Generated Image
            </span>
          </div>
          {loading && <p>Loading....</p>}
        </motion.div>
      )}

      {/* PROMPT INPUT */}
      {!isImageLoaded && (
        <motion.div
          className="flex flex-col items-center gap-4 w-full md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what to generate..."
            className="w-full px-5 py-3 border border-yellow-300 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-500 transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300"
          >
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </motion.div>
      )}

      {/* BUTTONS WHEN IMAGE LOADED */}
      {isImageLoaded && (
        <motion.div
          className="flex flex-col items-center mt-6 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            type="button"
            onClick={() => setIsImageLoaded(false)}
            className="text-lg font-medium border border-zinc-900 px-4 py-2 rounded-md hover:bg-yellow-100"
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-black hover:bg-gray-800 text-white font-medium px-5 py-2 rounded-full transition-all duration-300 shadow"
          >
            Download
          </a>
        </motion.div>
      )}
    </motion.form>
  )
}

export default Result
