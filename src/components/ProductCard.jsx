import { Link } from "react-router-dom"

const ProductCard = ({_id: id, name, price, images}) => {

  return (
    <Link to={`/products/${id}`}>
        <div className="flex flex-col items-start gap-2 px-2 w-[140px] h-[210px] m-6 shadow-md rounded-md  hover:border-[#2D80CC] hover:border text-center">
        <img src={images[0]} alt="" className="w-[120px] h-[120px]"/>
            <p className="font-bold text-sm ">R$: {price},00</p>
            <p className="font-normal text-sm text-[#737070]">{name}</p>
        </div>
    </Link>
  )
}

export default ProductCard