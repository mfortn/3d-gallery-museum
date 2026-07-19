import { GalleryProvider } from './context/GalleryContext'
import SceneContainer from './components/3d/SceneContainer'
import UIOverlay from './components/2d/UIOverlay'
import DetailModal from './components/2d/DetailModal'

export default function App() {
  return (
    <GalleryProvider>
      <div className="w-screen h-screen">
        <SceneContainer />
        <UIOverlay />
        <DetailModal />
      </div>
    </GalleryProvider>
  )
}
