import { Canvas } from '@react-three/fiber'
import PlayerControls from './PlayerControls'
import WorldBuilder from './WorldBuilder'
import InteractionRaycaster from './InteractionRaycaster'

export default function SceneContainer() {
  return (
    <Canvas
      camera={{ position: [-4, 2, 0], fov: 75 }}

      onCreated={({ camera }) => camera.lookAt(6, 2.5, 0)}
    >
      <color attach="background" args={['#121214']} />
      <ambientLight intensity={0.5} />
      <PlayerControls />
      <WorldBuilder />
      <InteractionRaycaster />
    </Canvas>
  )
}
