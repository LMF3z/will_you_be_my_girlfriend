import { create } from 'zustand';

interface ModalNameStore {
  isOpen: boolean;
  handleOpenModal: (isOpen: boolean) => void;
}

export const useModalNameStore = create<ModalNameStore>()((set) => ({
  isOpen: true,
  handleOpenModal: (isOpen: boolean) => set(() => ({ isOpen })),
}));
