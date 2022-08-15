import create from "zustand"

const useTagStore = create((set) =>({
    Tags : [],
    AddTag : () => set((state) => ({ Tags : Tags.push(state)}))
}))