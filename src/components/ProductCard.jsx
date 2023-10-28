import { Link } from "react-router-dom"

const ProductCard = ({_id: id, name, price, images}) => {

  return (
    <Link to={`/product/${id}`}>
        <div className="productCard">
        <img src={images[0]} alt="" className="productImage"/>
            <p className="font-bold text-sm ">R$: {price},00</p>
            <p className="font-normal text-sm text-[#737070]">{name}</p>
        </div>
    </Link>
  )
}

export default ProductCard