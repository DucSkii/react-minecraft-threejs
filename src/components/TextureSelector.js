import { useEffect, useState } from 'react'
import useStore from '../hooks/useStore'
import useKeyboard from '../hooks/useKeyboard'
import { dirtImg, grassImg, glassImg, woodImg, logImg } from '../images/images'

const TextureSelector = () => {
  const [visible, setVisible] = useState(false)
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ])

  const { dirt, grass, glass, wood, log } = useKeyboard()

  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      wood,
      log,
    }
    const pressedTexture = Object.entries(textures).find(([k, v]) => v)
    if (pressedTexture) {
      setTexture(pressedTexture[0])
    }
  }, [setTexture, dirt, grass, glass, wood, log])

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false)
    }, 2000)
    setVisible(true)

    return () => {
      clearTimeout(visibilityTimeout)
    }
  }, [activeTexture])

  return (
    visible && (
      <div className='textureSelector'>
        <p>Cube Selector</p>
        <div className='cubes'>
          <img
            src={dirtImg}
            alt='dirtImg'
            style={{ backgroundColor: activeTexture === 'dirt' && 'red' }}
          />
          <img
            src={grassImg}
            alt='grassImg'
            style={{ backgroundColor: activeTexture === 'grass' && 'red' }}
          />
          <img
            src={glassImg}
            alt='glassImg'
            style={{ backgroundColor: activeTexture === 'glass' && 'red' }}
          />
          <img
            src={woodImg}
            alt='woodImg'
            style={{ backgroundColor: activeTexture === 'wood' && 'red' }}
          />
          <img
            src={logImg}
            alt='logImg'
            style={{ backgroundColor: activeTexture === 'log' && 'red' }}
          />
        </div>
      </div>
    )
  )
}

export default TextureSelector
