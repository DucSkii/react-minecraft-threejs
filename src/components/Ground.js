import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../images/textures'
import { useThree } from '@react-three/fiber'
import useStore from '../hooks/useStore'

const Ground = () => {
  const { camera } = useThree()

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }))

  const [addCube] = useStore((state) => [state.addCube])

  groundTexture.repeat.set(100, 100)

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation()
        const [x, y, z] = Object.values(e.point).map((val) => Math.ceil(val))
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
        addCube(x, y, z)
      }}
    >
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )
}

export default Ground
