import { useRef, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { WALL_HEIGHT, CELL_SIZE, WALL_THICKNESS } from './constants'
import { hoverState } from '../shared/hoverState'
import { frameMeshes } from '../shared/frameMeshes'
import * as THREE from 'three'

const FRAME_DEPTH = 0.1
const FRAME_BORDER = 0.12
const BASE_HEIGHT = 3
const MAX_WIDTH = 5.5
const WALL_GAP = 0.2
const WH = WALL_THICKNESS / 2

const WALL_POS = {
  north: { x: 0, z: -CELL_SIZE / 2 + WH + WALL_GAP },
  south: { x: 0, z:  CELL_SIZE / 2 - WH - WALL_GAP },
  east:  { x:  CELL_SIZE / 2 - WH - WALL_GAP, z: 0 },
  west:  { x: -CELL_SIZE / 2 + WH + WALL_GAP, z: 0 },
}

export default function ArtFrame({ asset, mountWall }) {
  const texture = useTexture(asset.thumbnail_url)
  const spotRef = useRef()
  const targetRef = useRef()
  const frameRef = useRef()

  const pos = WALL_POS[mountWall] || WALL_POS.east
  const artX = pos.x
  const artZ = pos.z
  const artY = 2.5

  const dims = useMemo(() => {
    const iw = texture.image?.width || 4
    const ih = texture.image?.height || 3
    const aspect = iw / ih
    let w = BASE_HEIGHT * aspect
    let h = BASE_HEIGHT
    if (w > MAX_WIDTH) {
      w = MAX_WIDTH
      h = w / aspect
    }
    return { w, h, aspect }
  }, [texture])

  useEffect(() => {
    if (spotRef.current && targetRef.current) {
      spotRef.current.target = targetRef.current
    }
  }, [])

  useEffect(() => {
    const meshes = frameRef.current ? Array.from(frameRef.current.children).filter(c => c.isMesh) : []
    meshes.forEach(m => { if (!frameMeshes.includes(m)) frameMeshes.push(m) })
    return () => {
      meshes.forEach(m => { const i = frameMeshes.indexOf(m); if (i !== -1) frameMeshes.splice(i, 1) })
    }
  })

  useFrame(() => {
    if (!frameRef.current) return
    const isHovered = hoverState.current === asset.id
    frameRef.current.children.forEach(child => {
      if (child.isMesh && child.material) {
        child.material.emissive = isHovered ? new THREE.Color('white') : new THREE.Color('black')
        child.material.emissiveIntensity = isHovered ? 0.3 : 0
      }
    })
  })

  const { w, h } = dims
  const hw = w / 2
  const hh = h / 2

  return (
    <group>
      <spotLight
        ref={spotRef}
        position={[artX, WALL_HEIGHT - 0.5, artZ]}
        angle={Math.PI / 5}
        penumbra={1.0}
        intensity={5}
        color="#ffdcaa"
        decay={2}
        distance={15}

      />
      <object3D ref={targetRef} position={[artX, artY, artZ]} />

      <group ref={frameRef}>
        <mesh layers={[0, 1]} position={[artX, artY, artZ]} userData={{ assetId: asset.id }}>
          <boxGeometry args={[w, h, 0.05]} />
          <meshStandardMaterial map={texture} roughness={0.6} side={THREE.DoubleSide} />
        </mesh>

        <mesh layers={[0, 1]} position={[artX, artY + hh + FRAME_BORDER / 2, artZ]} userData={{ assetId: asset.id }}>
          <boxGeometry args={[w + FRAME_BORDER * 2, FRAME_BORDER, FRAME_DEPTH]} />
          <meshStandardMaterial color="black" roughness={0.5} />
        </mesh>
        <mesh layers={[0, 1]} position={[artX, artY - hh - FRAME_BORDER / 2, artZ]} userData={{ assetId: asset.id }}>
          <boxGeometry args={[w + FRAME_BORDER * 2, FRAME_BORDER, FRAME_DEPTH]} />
          <meshStandardMaterial color="black" roughness={0.5} />
        </mesh>
        <mesh layers={[0, 1]} position={[artX - hw - FRAME_BORDER / 2, artY, artZ]} userData={{ assetId: asset.id }}>
          <boxGeometry args={[FRAME_BORDER, h + FRAME_BORDER * 2, FRAME_DEPTH]} />
          <meshStandardMaterial color="black" roughness={0.5} />
        </mesh>
        <mesh layers={[0, 1]} position={[artX + hw + FRAME_BORDER / 2, artY, artZ]} userData={{ assetId: asset.id }}>
          <boxGeometry args={[FRAME_BORDER, h + FRAME_BORDER * 2, FRAME_DEPTH]} />
          <meshStandardMaterial color="black" roughness={0.5} />
        </mesh>
      </group>
    </group>
  )
}
