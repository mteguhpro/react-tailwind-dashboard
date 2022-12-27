import create from 'zustand'

const aktif = (window.innerWidth >= 768)

const useSidebarStore = create((set) => ({
    isActive: aktif,
    toggle: () => set((state) => ({ isActive: !state.isActive })),
}))

export default useSidebarStore