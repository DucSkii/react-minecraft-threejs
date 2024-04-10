import useStore from '../hooks/useStore'

const Overlay = () => {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ])

  return (
    <div className='overlay'>
      <div className='worldButtons'>
        <button onClick={() => saveWorld()}>Save</button>
        <button onClick={() => resetWorld()}>Reset</button>
      </div>
      <div className='tips'>
        <p>Press Esc to move cursor</p>
        <p>Digits 1-5 to change blocks</p>
        <p>Alt + Click to remove blocks</p>
      </div>
    </div>
  )
}

export default Overlay
