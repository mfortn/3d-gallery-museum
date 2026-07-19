import { createContext, useContext, useState, useEffect } from 'react'

const GalleryContext = createContext(null)

export function GalleryProvider({ children }) {
  const [assets, setAssets] = useState([])
  const [activeModalId, setActiveModalId] = useState(null)
  const [hoveredTooltipId, setHoveredTooltipId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/fetch_assets.php')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch assets')
        return res.json()
      })
      .then(data => {
        setAssets(data)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [])

  const hoveredTooltipAsset = hoveredTooltipId
    ? assets.find(a => a.id === hoveredTooltipId)
    : null

  return (
    <GalleryContext.Provider value={{ assets, activeModalId, setActiveModalId, hoveredTooltipId, setHoveredTooltipId, hoveredTooltipAsset, isLoading, error }}>
      {children}
    </GalleryContext.Provider>
  )
}

export function useGallery() {
  const ctx = useContext(GalleryContext)
  if (!ctx) throw new Error('useGallery must be used within GalleryProvider')
  return ctx
}
