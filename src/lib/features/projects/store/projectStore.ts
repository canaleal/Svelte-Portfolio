import { writable } from 'svelte/store'
import type { IProject } from '../types'

interface IProjectStore {
  selectedProject: IProject | undefined
}

const initialState: IProjectStore = {
  selectedProject: undefined
}

const createProjectStore = () => {
  const { subscribe, update } = writable(initialState)

  return {
    subscribe,
    setSelectedProject: (project: IProject) => update((store) => ({ ...store, selectedProject: project })),
    clearSelectedProject: () => update((store) => ({ ...store, selectedProject: undefined }))
  }
}

export const projectStore = createProjectStore()
