import create from 'zustand';

type GLOBAL_THEME = 'light' | 'dark';
type GLOBAL_LANGUAGE = 'en' | 'kr';

interface GlobalStore {
	theme: GLOBAL_THEME;
	changeTheme: (theme: GLOBAL_THEME) => void;
	language: GLOBAL_LANGUAGE;
	changeLanguage: (language: GLOBAL_LANGUAGE) => void;
}

const globalStore = create<GlobalStore>((set) => ({
	theme: 'light',
	changeTheme: (theme: GLOBAL_THEME) => set(() => ({ theme })),
	language: 'kr',
	changeLanguage: (language: GLOBAL_LANGUAGE) => set({ language }),
}));

export default globalStore;
