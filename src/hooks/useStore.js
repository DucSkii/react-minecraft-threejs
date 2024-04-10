import create from 'zustand'
import { nanoid } from 'nanoid'

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value))

const useStore = create((set) => ({
  texture: 'dirt',
  cubes: getLocalStorage('cubes') || [],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }))
  },
  removeCube: (key) => {
    set((prev) => ({
      cubes: prev.cubes.filter((cube) => cube.key !== key),
    }))
  },
  setTexture: (texture) => {
    set(() => ({
      texture,
    }))
  },
  saveWorld: () => {
    set((prev) => {
      setLocalStorage('cubes', prev.cubes)
    })
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }))
  },
}))

export default useStore
