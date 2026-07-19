import { useEffect } from 'react'
import { useGallery } from '../../context/GalleryContext'

export default function DetailModal() {
  const { assets, activeModalId, setActiveModalId } = useGallery()

  useEffect(() => {
    if (activeModalId == null) return
    const handleKey = (e) => {
      if (e.code === 'Escape') setActiveModalId(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeModalId, setActiveModalId])

  if (activeModalId == null) return null

  const asset = assets.find(a => a.id === activeModalId)
  if (!asset) return null

  const a = asset

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-md bg-black/75">
      <div className="relative w-full max-w-4xl h-[500px] bg-[#141416] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row">

        <button
          onClick={() => setActiveModalId(null)}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 text-white/60 hover:text-white hover:bg-black/80 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black/40 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10">
          <img
            src={a.full_res_url}
            alt={a.title}
            className="w-full h-full object-contain rounded-lg drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </div>

        <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 flex flex-col justify-between bg-[#18181c]">

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest bg-white/10 text-gray-300 rounded-full">
                {a.created_year || "2026"}
              </span>
              <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                {a.category || "General"}
              </span>
            </div>

            <h2 className="text-3xl font-bold font-serif tracking-wide text-white leading-tight">
              {a.title}
            </h2>

            <p className="text-gray-400 text-sm font-light leading-relaxed max-h-[180px] overflow-y-auto pr-2 scrollbar-thin">
              {a.description || "No description provided for this artwork."}
            </p>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-col space-y-3">
            {a.file_url && (
              <a
                href={a.file_url}
                download
                className="w-full py-3 px-5 text-center bg-white text-black font-medium text-sm rounded-xl hover:bg-gray-200 shadow-lg active:scale-[0.98] transition-all"
              >
                Download Project Assets
              </a>
            )}
            <p className="text-center text-[11px] text-white/30 tracking-wider font-mono">
              Press [ESC] or click X to resume exploration
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}
