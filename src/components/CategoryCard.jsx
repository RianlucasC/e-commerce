const CategoryCard = ({name, img}) => {
  return (
    <div className='categoryCard'>
        <img src={img} alt="" className='w-[80px] h-[80px]'/>
        <p className='text-[#646060] text-sm'>{name}</p>
    </div>
  )
}

export default CategoryCard