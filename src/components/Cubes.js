import useStore from '../hooks/useStore'
import Cube from './Cube'

const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes])
  console.log('cubes', cubes)

  return cubes.map(({ key, pos, texture }) => {
    return <Cube key={key} cubeKey={key} position={pos} texture={texture} />
  })
}

export default Cubes
