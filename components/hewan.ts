import create from "zustand";
import { persist, StateStorage } from "zustand/middleware";
import { get, set } from "idb-keyval"; // can use anything: IndexedDB, Ionic Storage, etc.

export interface Fish {
	beruang: number;
	serigala: number;
	totalHewan: number;
	tambahBeruang: () => void;
	tambahSerigala: () => void;
	kosongkanHewan: () => void;
}

// Custom storage object
export const storage: StateStorage = {
	getItem: async (name: string): Promise<string | null> => {
		return (await get(name)) || null;
	},
	setItem: async (name: string, value: string): Promise<void> => {
		set(name, value);
	},
};

export const useStore = create<Fish>(
	persist(
		(set, get) => ({
			beruang: 0,
			serigala: 0,
			totalHewan: 0,
			tambahBeruang: () =>
				set({ beruang: get().beruang + 1, totalHewan: get().totalHewan + 1 }),
			tambahSerigala: () =>
				set({ serigala: get().serigala + 1, totalHewan: get().totalHewan + 1 }),
			kosongkanHewan: () => set({ totalHewan: 0, serigala: 0, beruang: 0 }),
		}),
		{
			name: "animal-storage", // unique name
			getStorage: () => storage,
		}
	)
);
export default useStore;
