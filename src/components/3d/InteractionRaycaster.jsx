import { useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { hoverState } from './shared/hoverState'
import { frameMeshes } from './shared/frameMeshes'

export default function InteractionRaycaster() {
  const { camera } = useThree()
  const raycasterRef = useRef(new THREE.Raycaster())

  useFrame(() => {
    const raycaster = raycasterRef.current
    raycaster.setFromCamera({ x: 0, y: 0 }, camera)
    const intersects = raycaster.intersectObjects(frameMeshes, false)
    const hit = intersects.length > 0 ? intersects[0] : null
    hoverState.current = hit ? hit.object.userData.assetId : null
  })

  return null
}
