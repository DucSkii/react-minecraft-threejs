import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Ground from './components/Ground'
import Player from './components/Player'
import FPV from './components/FPV'
import Cubes from './components/Cubes'
import TextureSelector from './components/TextureSelector'
import Overlay from './components/Overlay'

const App = () => {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[10, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='cursor'>+</div>
      <TextureSelector />
      <Overlay />
    </>
  )
}

export default App
