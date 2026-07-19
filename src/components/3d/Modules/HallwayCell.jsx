import { CELL_SIZE, WALL_HEIGHT, WALL_THICKNESS } from './constants'

const wallMat = {
  roughness: 0.9,
  metalness: 0,
  color: '#f0ece4',
}

const floorMat = {
  roughness: 0.4,
  metalness: 0.1,
  color: '#c4a882',
}

const ceilingMat = {
  roughness: 0.9,
  metalness: 0,
  color: '#444444',
}

export default function HallwayCell({ openWalls }) {
  const half = CELL_SIZE / 2
  const wallH = WALL_HEIGHT / 2

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[CELL_SIZE, CELL_SIZE]} />
        <meshStandardMaterial {...floorMat} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, WALL_HEIGHT, 0]}>
        <planeGeometry args={[CELL_SIZE, CELL_SIZE]} />
        <meshStandardMaterial {...ceilingMat} side={2} />
      </mesh>

      {!openWalls.east && (
        <mesh position={[half, wallH, 0]}>
          <boxGeometry args={[WALL_THICKNESS, WALL_HEIGHT, CELL_SIZE]} />
          <meshStandardMaterial {...wallMat} />
        </mesh>
      )}
      {!openWalls.west && (
        <mesh position={[-half, wallH, 0]}>
          <boxGeometry args={[WALL_THICKNESS, WALL_HEIGHT, CELL_SIZE]} />
          <meshStandardMaterial {...wallMat} />
        </mesh>
      )}
      {!openWalls.north && (
        <mesh position={[0, wallH, -half]}>
          <boxGeometry args={[CELL_SIZE, WALL_HEIGHT, WALL_THICKNESS]} />
          <meshStandardMaterial {...wallMat} />
        </mesh>
      )}
      {!openWalls.south && (
        <mesh position={[0, wallH, half]}>
          <boxGeometry args={[CELL_SIZE, WALL_HEIGHT, WALL_THICKNESS]} />
          <meshStandardMaterial {...wallMat} />
        </mesh>
      )}
    </group>
  )
}
