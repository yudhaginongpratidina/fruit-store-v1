// LIBS
import { create } from "zustand";
import { persist } from "zustand/middleware";

// 1. BUAT STORE
const appStore = (set, get) => ({
    // 2. OBJECT STATE
    count: 0,
    materi: "Belajar Zustand",
    username: "",
    detailUser: {},

    // 2. OBJECT FUNCTION
    increment: () => {
        set((state) => ({
            count: state.count + 1
        }));
    },
    decrement: () => {
        set((state) => {
            if (state.count > 0) {
                return { count: state.count - 1 };
            } else {
                return { count: 0 };
            }
        });
    },

    updateUsername: (username) => {
        set({ username });
    },

    // 3. ASYNC FUNCTION
    getUser: async () => {
        try {
            const username = get().username;
            console.log("Get User");
            console.log("User: " + username);

            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            // console.log(data);
            set({ detailUser: data });
        } catch (error) {
            if (error.response) {
                const { data } = error.response;
                console.log(data);
            } else {
                console.log(error);
            }
        }
    }
})


const useAppStore = create(persist(appStore, {
    name: "app-store",
}));

export default useAppStore;
