import { useMemo, useEffect } from 'react'
import { useGallery } from '../../context/GalleryContext'
import HallwayCell from './Modules/HallwayCell'
import ArtFrame from './Modules/ArtFrame'
import { CELL_SIZE } from './Modules/constants'
import { collisionGrid } from './shared/collisionGrid'

function buildLinearCells(assetCount) {
  const cellCount = Math.ceil(assetCount / 2)
  const cells = []
  for (let i = 0; i < cellCount; i++) {
    const isFirst = i === 0
    const isLast = i === cellCount - 1
    cells.push({
      x: i * CELL_SIZE,
      z: 0,
      walls: {
        north: false,
        south: false,
        east: !isLast,
        west: !isFirst,
      },
    })
  }
  return cells
}

export default function WorldBuilder() {
  const { assets } = useGallery()

  const grid = useMemo(() => {
    if (!assets.length) return []
    return buildLinearCells(assets.length)
  }, [assets])

  useEffect(() => {
    collisionGrid.current = grid
  }, [grid])

  if (!assets.length) return null

  return (
    <group>
      {grid.map((cell, i) => {
        const northIdx = i * 2
        const southIdx = i * 2 + 1
        return (
          <group key={i} position={[cell.x, 0, cell.z]}>
            <HallwayCell openWalls={cell.walls} />
            {assets[northIdx] && <ArtFrame asset={assets[northIdx]} mountWall="north" />}
            {assets[southIdx] && <ArtFrame asset={assets[southIdx]} mountWall="south" />}
          </group>
        )
      })}
    </group>
  )
}
