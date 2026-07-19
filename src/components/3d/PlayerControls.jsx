import { PointerLockControls as DreiLock } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useGallery } from '../../context/GalleryContext'
import { collisionGrid } from './shared/collisionGrid'
import { CELL_SIZE } from './Modules/constants'

function clampToGrid(pos, grid) {
  const pr = 0.3
  let cx = pos.x, cz = pos.z

  for (const cell of grid) {
    const h = CELL_SIZE / 2
    const left = cell.x - h, right = cell.x + h
    const top = cell.z - h, bottom = cell.z + h
    const nearX = pos.x > left - pr && pos.x < right + pr
    const nearZ = pos.z > top - pr && pos.z < bottom + pr
    if (!nearX || !nearZ) continue

    if (!cell.walls.east)  cx = Math.min(cx, right - pr)
    if (!cell.walls.west)  cx = Math.max(cx, left + pr)
    if (!cell.walls.north) cz = Math.max(cz, top + pr)
    if (!cell.walls.south) cz = Math.min(cz, bottom - pr)
  }
  return { x: cx, z: cz }
}

export default function PlayerControls() {
  const { camera, gl } = useThree()
  const { activeModalId } = useGallery()
  const controlsRef = useRef()
  const keys = useRef({})

  useEffect(() => {
    if (activeModalId) {
      controlsRef.current?.unlock()
    }
  }, [activeModalId])

  useEffect(() => {
    const canvas = gl.domElement
    const handleClick = () => {
      if (activeModalId) return
      controlsRef.current?.lock()
    }
    canvas.addEventListener('click', handleClick)
    return () => canvas.removeEventListener('click', handleClick)
  }, [gl, activeModalId])

  useEffect(() => {
    const down = (e) => { keys.current[e.code] = true }
    const up = (e) => { keys.current[e.code] = false }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [])

  useFrame((_, delta) => {
    if (!controlsRef.current?.isLocked || activeModalId) return

    const speed = 5 * delta
    const dir = new THREE.Vector3()
    camera.getWorldDirection(dir)
    const right = new THREE.Vector3().crossVectors(dir, camera.up).normalize()

    if (keys.current['KeyW'] || keys.current['ArrowUp'])
      camera.position.add(dir.clone().multiplyScalar(speed))
    if (keys.current['KeyS'] || keys.current['ArrowDown'])
      camera.position.add(dir.clone().multiplyScalar(-speed))
    if (keys.current['KeyA'] || keys.current['ArrowLeft'])
      camera.position.add(right.clone().multiplyScalar(-speed))
    if (keys.current['KeyD'] || keys.current['ArrowRight'])
      camera.position.add(right.clone().multiplyScalar(speed))

    const clamped = clampToGrid(camera.position, collisionGrid.current)
    camera.position.x = clamped.x
    camera.position.z = clamped.z
    camera.position.y = 2
  })

  return <DreiLock ref={controlsRef} />
}
