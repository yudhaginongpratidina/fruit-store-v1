// 3 IMPORT STORE
import useAppStore from "../stores/AppStore";


export default function Belajar() {
    // 4. MENGGUNAKAN STORE SERTA STATE ATAU FUNCTION YANG AKAN DIGUNAKAN (CARA 1 - PER STATE)
    const materi = useAppStore((state) => state.materi);
    const countValue = useAppStore((state) => state.count);
    const increment = useAppStore((state) => state.increment);
    const decrement = useAppStore((state) => state.decrement);

    const username = useAppStore((state) => state.username);
    const updateUsername = useAppStore((state) => state.updateUsername);
    const getUser = useAppStore((state) => state.getUser);
    const detailUser = useAppStore((state) => state.detailUser);

    const handleSearch = (e) => {
        e.preventDefault();
        getUser();
    };

    console.log(detailUser);

    return (
        <div className="w-full px-6 min-h-screen flex flex-col gap-2 items-center justify-center">
            <h1>{materi}</h1>
            <h1>{countValue}</h1>
            <div className="flex items-center gap-3">
                <button onClick={increment} className="py-2 px-4 bg-blue-500 text-white">
                    Tambah
                </button>
                <button onClick={decrement} className="py-2 px-4 bg-rose-500 text-white">
                    Kurang
                </button>
            </div>

            <form onSubmit={handleSearch} className="w-full max-w-screen-sm py-4 flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Masukkan Username Github Mu..."
                    className="w-full p-2 border outline-none"
                    value={username}
                    onChange={(e) => updateUsername(e.target.value)} 
                />
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Search
                </button>
            </form>
        </div>
    );
}
