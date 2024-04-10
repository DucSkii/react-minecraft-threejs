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
    </div>
  )
}

export default Overlay
