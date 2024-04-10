import { PointerLockControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

const FPV = () => {
  const { camera, gl } = useThree()

  // controls.addEventListener('unlock', () => {
  //   console.log('unlocked')
  // })

  return <PointerLockControls args={[camera, gl.domElement]} />
}

export default FPV
