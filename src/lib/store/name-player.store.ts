import { create } from 'zustand';

interface NamePlayerStore {
  name: string;
  handleChange: (name: string) => void;
}

export const useNamePlayerStore = create<NamePlayerStore>()((set) => ({
  name: '',
  handleChange: (name: string) => set(() => ({ name })),
}));
