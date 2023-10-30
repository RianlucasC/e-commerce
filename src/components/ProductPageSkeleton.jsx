
const ProductPageSkeleton = () => {
  return (
    <div className='flex justify-center animate-pulse mb-16'>
        <div className='flex p-4 flex-col gap-4 items-center border w-[375px] md:h-[390px] shadow-md'>
          <div className='w-[260px] h-[260px] bg-[#D3D2D2] rounded-lg'></div>
          <div className='flex gap-2'>
            <div className='imgSmallSkeleton'></div>
            <div className='imgSmallSkeleton'></div>
            <div className='imgSmallSkeleton'></div>
            <div className='imgSmallSkeleton'></div>
          </div>
        </div>
        <div className='w-[375px] justify-between hidden md:flex md: flex-col md:h-[390px] border rounded-lg shadow-md p-4'>
          <div className='flex flex-col gap-4'>
            <div className='skeletonText'></div>
            <div className='skeletonText'></div>
            <div className='skeletonText'></div>
          </div>
          <div className='skeletonText h-10 rounded-lg'></div>
        </div>
    </div>
  )
}

export default ProductPageSkeleton