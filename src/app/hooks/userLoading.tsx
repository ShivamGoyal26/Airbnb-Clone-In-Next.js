import { create } from "zustand";

interface RegisterModalStore {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const useLoading = create<RegisterModalStore>((set) => ({
  isLoading: false,
  startLoading: () => set({ isLoading: true }),
  stopLoading: () => set({ isLoading: false }),
}));

export default useLoading;
