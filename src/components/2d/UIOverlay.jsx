import { useSyncExternalStore, useEffect } from 'react'
import { useGallery } from '../../context/GalleryContext'
import { hoverState } from '../3d/shared/hoverState'

export default function UIOverlay() {
  const { assets, isLoading, error, activeModalId, setActiveModalId } = useGallery()
  const hoveredId = useSyncExternalStore(
    cb => hoverState.subscribe(cb),
    () => hoverState.current,
  )
  const hoveredAsset = hoveredId != null ? assets.find(a => a.id === hoveredId) : null

  useEffect(() => {
    const handleClick = () => {
      if (activeModalId) return
      if (!document.pointerLockElement) return
      if (hoverState.current != null) {
        setActiveModalId(hoverState.current)
      }
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [activeModalId, setActiveModalId])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="text-white text-xl">Loading gallery...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
        <div className="text-red-400 text-xl">Error: {error}</div>
        <div className="text-gray-500 text-sm mt-2">Make sure the PHP server is running: npm run php-server</div>
      </div>
    )
  }

  return (
    <>
      {!activeModalId && (
        <div className="fixed inset-0 pointer-events-none z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <div className="absolute w-4 h-px bg-white/60" />
              <div className="absolute h-4 w-px bg-white/60" />
            </div>
            {hoveredAsset && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap bg-black/75 text-white text-xs px-3 py-1.5 rounded pointer-events-none">
                {hoveredAsset.title}
              </div>
            )}
          </div>
        </div>
      )}
      {!activeModalId && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/40 text-xs pointer-events-none select-none">
          Click to explore &middot; WASD to move &middot; Reticle on art to inspect
        </div>
      )}
    </>
  )
}
