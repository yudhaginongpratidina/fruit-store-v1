export default function ProductItem(){
    return (
        <div className="w-full p-4 border-t-2 rounded border-t-blue-500 bg-white">

            <div className="w-full h-[200px] relative">
                <img 
                    src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1627458125/attached_image/sehat-tiap-hari-berkat-manfaat-pisang.jpg" 
                    alt="pisang" 
                    className="w-full h-[200px] object-cover mb-4 rounded"
                />
                <span className="absolute top-0 left-0 px-2 py-1 bg-blue-500 text-white rounded-tl">Pisang</span>
            </div>

            <h1 className="text-lg font-medium uppercase">Pisang Nangka</h1>
            <span className="text-md font-medium">Rp. 10.000</span>
            <div className="w-full py-1.5">
                <button className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white">Add to cart</button>
            </div>
        </div>
    )
}
// 