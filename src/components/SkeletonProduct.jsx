
const SkeletonProduct = () => {
  return (
    <div className="productCard hover:border-0 animate-pulse">
        <div className="productImage bg-[#D3D2D2] rounded-md"/>
            <div className="bg-[#D3D2D2] h-3 w-3/5"></div>
            <div className="skeletonText"></div>
            <div className="skeletonText"></div>
        </div>
  )
}

export default SkeletonProduct;