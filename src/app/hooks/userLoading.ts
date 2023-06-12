import { create } from "zustand";

interface LoadingStore {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  modalLoading: boolean;
  startModalLoading: () => void;
  stopModalLoading: () => void;
}

const useLoading = create<LoadingStore>((set) => ({
  isLoading: false,
  startLoading: () => set({ isLoading: true }),
  stopLoading: () => set({ isLoading: false }),
  modalLoading: false,
  startModalLoading: () => set({ modalLoading: true }),
  stopModalLoading: () => set({ modalLoading: false }),
}));

export default useLoading;
