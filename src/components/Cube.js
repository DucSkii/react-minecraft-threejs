import { useBox } from '@react-three/cannon'
import * as textures from '../images/textures'
import useStore from '../hooks/useStore'
import { useThree } from '@react-three/fiber'

const Cube = ({ cubeKey, position, texture }) => {
  const { camera } = useThree()

  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }))

  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ])

  const activeTexture = textures[texture + 'Texture']

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation()
        const clickedFace = Math.floor(e.faceIndex / 2)
        const { x, y, z } = ref.current.position

        const [currentX, currentY, currentZ] = Object.values(
          camera.position
        ).map((val) => Math.ceil(val))

        if (
          Math.abs(x - currentX) > 4 ||
          Math.abs(y - currentY) > 4 ||
          Math.abs(z - currentZ) > 4
        ) {
          return console.log('Too Far')
        }

        if (e.altKey) {
          return removeCube(cubeKey)
        }

        if (clickedFace === 0) {
          addCube(x + 1, y, z)
        }
        if (clickedFace === 1) {
          addCube(x - 1, y, z)
        }
        if (clickedFace === 2) {
          addCube(x, y + 1, z)
        }
        if (clickedFace === 3) {
          addCube(x, y - 1, z)
        }
        if (clickedFace === 4) {
          addCube(x, y, z + 1)
        }
        if (clickedFace === 5) {
          addCube(x, y, z - 1)
        }
      }}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial attach='material' map={activeTexture} />
    </mesh>
  )
}

export default Cube
