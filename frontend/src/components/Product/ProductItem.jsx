export default function ProductItem(props){
    const {id, imageUrl, name, category, price} = props
    return (
        <div id={id} className="w-full p-4 border-t-2 rounded border-t-blue-500 bg-white">

            <div className="w-full h-[200px] relative">
                <img 
                    src={imageUrl} 
                    alt="pisang" 
                    className="w-full h-[200px] object-cover mb-4 rounded"
                />
                <span className="absolute top-0 left-0 px-2 py-1 bg-blue-500 text-white rounded-tl">{category}</span>
            </div>

            <h1 className="text-lg font-medium uppercase"> {name} </h1>
            <span className="text-md font-medium">Rp. {price}</span>
            <div className="w-full py-1.5">
                <button className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white">Add to cart</button>
            </div>
        </div>
    )
}
